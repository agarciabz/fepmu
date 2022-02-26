import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Options } from '@fepmu/data/three-houses';

@Component({
  selector: 'fepmu-three-houses-form',
  templateUrl: './three-houses-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreeHousesFormComponent {
  @Output()
  public optionsSubmitted = new EventEmitter<Options>();

  public formGroup = this.fb.group({
    route: ['Azure Moon'],
    avatarGender: ['male'],
    randomizeClasses: [{ value: false, disabled: false }],
    allowInviableBuilds: [{ value: false, disabled: true }],
    allowOtherHouses: [{ value: true, disabled: false }],
    balanceRoster: [{ value: false, disabled: true }], // depends on randomize
    includeFreeUpdates: [{ value: true, disabled: false }],
    includeSeasonPass: [{ value: false, disabled: false }],
    rosterSize: [{ value: 12, disabled: false }],
  });

  public routes = [
    'Azure Moon',
    'Crimson Flower',
    'Verdant Wind',
    'Silver Snow',
  ];
  public avatarGender = ['male', 'female', 'random'];

  constructor(private fb: FormBuilder) {
    this.handleFormChanges();
  }

  submitPick() {
    this.optionsSubmitted.emit(this.formGroup.value);
  }

  private handleFormChanges() {
    this.formGroup.valueChanges.subscribe((changes) => {
      const randomize: boolean = changes.randomizeClasses;
      const rosterControl = this.formGroup.get('balanceRoster');
      randomize
        ? rosterControl?.enable({ emitEvent: false })
        : rosterControl?.disable({ emitEvent: false });
    });
  }
}
