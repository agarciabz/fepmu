import { Inject, Injectable } from '@angular/core';
import {
  applyFilters,
  Character,
  CharacterClass,
  CLASSLIST,
  filterBalanced,
  filterByOptions,
  filterUnit,
  getBalancedClasses,
  getClassesFiltered,
  getExclusiveClasses,
  getRandomClass,
  getUnitsText,
  Options,
  Pick,
  randomizeGender,
  randomizeUnits,
  Route,
  routes,
  routes as ROUTES,
  splitAvatarUnit,
  UNITLIST,
} from '@fepmu/data/three-houses';
import { TuiNotificationsService } from '@taiga-ui/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

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
      ['Fire Emblem Three Houses PMU', route, '', getUnitsText(picks)].join(
        '\n'
      )
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
    const selected = applyFilters(options);
    this.route.next(options.route);
    this.selected$.next(selected);
  }
}
