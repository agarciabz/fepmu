import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Character, Options } from '@fepmu/data/three-houses';

import { ThreeHousesStore } from './three-houses.store';

@Component({
  selector: 'fepmu-three-houses-container',
  templateUrl: './three-houses-container.component.html',
  styleUrls: ['./three-houses-container.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ThreeHousesStore],
})
export class ThreeHousesContainerComponent {
  public selectedUnits = this.store.selected$.asObservable();
  public availableUnits = this.store.available$;
  public unavailableUnits = this.store.unavailable$;

  constructor(private store: ThreeHousesStore) {}

  public pickUnits(options: Options) {
    this.store.pickUnits(options);
  }
}
