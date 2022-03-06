import { Inject, Injectable } from '@angular/core';
import {
  Character,
  CharacterClass,
  CLASSLIST,
  Options,
  Pick,
  Route,
  routes,
  routes as ROUTES,
  UNITLIST,
} from '@fepmu/data/three-houses';
import { TuiNotificationsService } from '@taiga-ui/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { createSkillMap, getBalancedClasses } from '../../utils/balance';
import { filterUnit, splitAvatarUnit } from '../../utils/unit-filters';
import { randomizeGender } from '../../utils/randomize-gender';
import { filterBalanced, filterByOptions } from '../../utils/class-filters';

@Injectable()
export class ThreeHousesStore {
  public readonly selected$ = new BehaviorSubject<Pick[]>([]);
  // public readonly available$ = new BehaviorSubject<Character[]>([]);
  // public readonly unavailable$ = new BehaviorSubject<Character[]>([]);
  public readonly route = new BehaviorSubject<string>('');
  public readonly selectedText$ = combineLatest([
    this.selected$,
    this.route,
  ]).pipe(
    map(([picks, route]) =>
      [
        'Fire Emblem Three Houses PMU',
        route,
        '',
        this.getUnitsText(picks),
      ].join('\n')
    )
  );

  public dancerPicked = false;
  private initialList = UNITLIST;
  public initialClassList = CLASSLIST;

  constructor(
    @Inject(TuiNotificationsService)
    private readonly notifications: TuiNotificationsService
  ) {}

  public copyToClipboard() {
    this.selectedText$.subscribe((text) =>
      navigator.clipboard
        .writeText(text)
        .then(() => this.notifications.show('Copied to clipboard'))
    );
  }

  public pickUnits(options: Options) {
    const selected = this.applyFilters(options);
    const classes = selected.map((cl) => cl.class) as CharacterClass[];
    console.debug(createSkillMap(classes));
    this.route.next(options.route);
    this.selected$.next(selected);
  }

  private applyFilters(options: Options): Pick[] {
    const { avatarGender: genderOp } = options;
    this.dancerPicked = false;

    const avatarGender = genderOp === 'random' ? randomizeGender() : genderOp;
    const [avatar, ...nonAvatarUnits] = splitAvatarUnit(
      this.initialList,
      avatarGender
    );

    const route = ROUTES.find((r) => r.name === options.route) as Route;

    const selectable = nonAvatarUnits.filter((unit) =>
      filterUnit(unit, route, options)
    );

    const selected = [
      avatar,
      ...this.randomizeUnits(selectable, options.rosterSize, options.route),
    ];

    return selected.reduce((picks: Pick[], unit: Character) => {
      const pick: Pick = {
        unit,
        class: options.randomizeClasses
          ? this.getRandomClass(unit, options, picks)
          : undefined,
      };
      this.dancerPicked = pick.class
        ? this.dancerPicked ||
          (!this.dancerPicked && pick.class.code === 'dancer')
        : this.dancerPicked;
      picks.push(pick);
      return picks;
    }, []);
  }

  private randomizeUnits(units: Character[], size: number, route: string) {
    const mandatoryCharacters = route === 'Silver Snow' ? 1 : 2;
    const lordName = (routes.find((r) => r.name === route) as Route).lord;
    const lord = units.splice(
      units.findIndex((u) => u.name === lordName),
      1
    )[0];
    const picked: Character[] = [];
    const pickNum = size - mandatoryCharacters;
    const nonLordUnits = [...units];
    let count = pickNum;
    let pos;
    while (count > 0) {
      pos = Math.floor(Math.random() * nonLordUnits.length);
      picked.push(nonLordUnits.splice(pos, 1)[0]);
      count--;
    }
    return route === 'Silver Snow' ? [...picked] : [lord, ...picked];
  }

  private getRandomClass(
    unit: Character,
    options: Options,
    currentPicks: Pick[]
  ): CharacterClass {
    const { includeSeasonPass, balanceRoster, allowInviableBuilds } = options;
    const currentClasses = currentPicks
      .filter((p) => p.class)
      .map((p) => p.class) as CharacterClass[];
    const balancedClasses = balanceRoster
      ? getBalancedClasses(currentClasses)
      : [];

    const selectableClasses = [
      ...this.getClassesFiltered(
        includeSeasonPass,
        unit,
        balanceRoster,
        balancedClasses,
        allowInviableBuilds
      ),
      ...this.getExclusiveClasses(unit),
    ];

    const random = Math.floor(Math.random() * selectableClasses.length);
    const pick = selectableClasses[random];
    return pick;
  }

  public getClassesFiltered(
    includeSeasonPass: boolean,
    unit: Character,
    balanceRoster: boolean,
    balancedClasses: CharacterClass[],
    allowInviableBuilds: boolean
  ) {
    const balancedAvailable =
      balancedClasses.filter((cl) =>
        filterByOptions(
          cl,
          includeSeasonPass,
          unit.gender,
          this.dancerPicked,
          unit,
          allowInviableBuilds
        )
      ).length > 0;

    return this.initialClassList.filter(
      (cl) =>
        filterByOptions(
          cl,
          includeSeasonPass,
          unit.gender,
          this.dancerPicked,
          unit,
          allowInviableBuilds
        ) &&
        filterBalanced(cl, balanceRoster && balancedAvailable, balancedClasses)
    );
  }

  // TODO Make this available in data to avoid another filter
  public getExclusiveClasses(unit: Character): CharacterClass[] {
    return this.initialClassList.filter((cl) =>
      cl.exclusiveTo.includes(unit.id)
    );
  }

  private getUnitsText(units: Pick[]) {
    return units
      .map((u) => `${u.unit.name}${u.class ? `: ${u.class.name}` : ''}`)
      .join('\n');
  }
}
