import { Inject, Injectable } from '@angular/core';
import {
  Character,
  Options,
  Pick,
  UNITLIST,
  CLASSLIST,
  routes as ROUTES,
  Route,
  routes,
  CharacterClass,
} from '@fepmu/data/three-houses';
import { TuiNotificationsService } from '@taiga-ui/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { filterUnit, splitAvatarUnit } from '../../utils/filters';
import { randomizeGender } from '../../utils/randomize-gender';

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
    this.route.next(options.route);
    this.selected$.next(selected);
  }

  private applyFilters(options: Options): Pick[] {
    const { avatarGender: genderOp } = options;

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

    return selected.map((unit) => ({
      unit,
      class: options.randomizeClasses
        ? this.getRandomClass(unit, options.includeSeasonPass)
        : undefined,
    }));
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
      pos = Math.floor(Math.random() * (nonLordUnits.length - 1));
      picked.push(nonLordUnits.splice(pos, 1)[0]);
      count--;
    }
    return route === 'Silver Snow' ? [...picked] : [lord, ...picked];
  }

  private getRandomClass(unit: Character, seasonPass: boolean): CharacterClass {
    const exclusiveClasses = this.getExclusiveClasses(unit);
    const selectableClasses = [
      ...this.initialClassList
        .filter((cl) => !cl.fromSeasonPass || (cl.fromSeasonPass && seasonPass))
        .filter((cl) => cl.exclusiveTo.length === 0)
        .filter((cl) => cl.requiredGender.includes(unit.gender)),
      ...exclusiveClasses,
    ];

    const random = Math.floor(Math.random() * (selectableClasses.length - 1));
    const newLocal = selectableClasses[random];
    return newLocal;
  }

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
