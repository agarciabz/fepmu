import { Injectable } from '@angular/core';
import {
  Character,
  Options,
  UNITLIST,
  routes as ROUTES,
  freeUpdateCharacters,
  Route,
  routes,
} from '@fepmu/data/three-houses';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Injectable()
export class ThreeHousesStore {
  public readonly selected$ = new BehaviorSubject<Character[]>([]);
  public readonly available$ = new BehaviorSubject<Character[]>([]);
  public readonly unavailable$ = new BehaviorSubject<Character[]>([]);
  public readonly route = new BehaviorSubject<string>('');
  public readonly selectedText$ = combineLatest([
    this.selected$,
    this.route,
  ]).pipe(
    map(([units, route]) =>
      [
        'Fire Emblem Three Houses PMU',
        route,
        '',
        this.getUnitsText(units),
      ].join('\n')
    )
  );

  private initialList = UNITLIST;

  public copyToClipboard() {
    this.selectedText$.subscribe((text) => navigator.clipboard.writeText(text));
  }

  public pickUnits(options: Options) {
    const selected = this.applyFilters(options);
    this.route.next(options.route);
    this.selected$.next(selected);
  }

  private applyFilters(options: Options): Character[] {
    const [avatar, ...nonAvatarUnits] = this.filterAvatarGender(
      options.avatarGender
    );
    const selectable = this.filterByRoute(
      [
        ...this.filterByGameUpdates(
          nonAvatarUnits,
          options.includeFreeUpdates,
          options.includeSeasonPass
        ),
      ],
      options.route,
      options.allowOtherHouses
    );
    const selected = [
      ...this.randomizeUnits(selectable, options.rosterSize, options.route),
    ];
    return [avatar, ...selected];
  }

  private filterByGameUpdates(
    units: Character[],
    freeUpdates: boolean,
    seasonPass: boolean
  ) {
    const withFreeUpdates = freeUpdates
      ? [...units]
      : [...units.filter((u) => !freeUpdateCharacters.includes(u.name))];
    let res = withFreeUpdates;
    if (!seasonPass) {
      res = [...res.filter((u) => u.faction !== 'Ashen Wolves')];
    }
    return res;
  }

  private filterAvatarGender(genderOption: string) {
    const otherUnits: Character[] = [
      ...this.initialList.filter(
        (u) => !['Byleth (M)', 'Byleth (F)'].includes(u.name)
      ),
    ];
    let avatar: Character;
    const gender =
      genderOption === 'random' ? this.randomizeGender() : genderOption;
    if (gender === 'male') {
      avatar = this.initialList.find(
        (u) => u.name === 'Byleth (M)'
      ) as Character;
    } else {
      avatar = this.initialList.find(
        (u) => u.name === 'Byleth (F)'
      ) as Character;
    }
    return [avatar, ...otherUnits];
  }

  private filterByRoute(
    units: Character[],
    routeName: string,
    otherHouses: boolean
  ) {
    const route = ROUTES.find((r) => r.name === routeName) as Route;
    return otherHouses
      ? [...units.filter((u) => !route.unavailableCharacters.includes(u.name))]
      : [
          ...units
            .filter(
              (u) =>
                u.faction === route.house ||
                u.faction === 'Church of Seiros' ||
                u.faction === 'Ashen Wolves'
            )
            .filter((u) => !route.unavailableCharacters.includes(u.name)),
        ];
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
      pos = Math.floor(Math.random() * nonLordUnits.length - 1);
      picked.push(nonLordUnits.splice(pos, 1)[0]);
      count--;
    }
    return route === 'Silver Snow' ? [...picked] : [lord, ...picked];
  }

  private randomizeGender(): string {
    return Math.floor(Math.random() * 2) === 0 ? 'male' : 'female';
  }

  private getUnitsText(units: Character[]) {
    return units.map((u) => u.name).join('\n');
  }
}
