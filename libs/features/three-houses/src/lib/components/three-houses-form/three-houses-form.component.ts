import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl } from '@angular/forms';
import { Options } from '@fepmu/data/three-houses';

const randomizeOptions = ['balanceRoster', 'allowInviableBuilds'];

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
    allowInviableBuilds: [{ value: false, disabled: true }], // depends on randomize
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
    this.onRandomizeControlChanges();
  }

  public submitPick() {
    this.optionsSubmitted.emit(this.formGroup.value);
  }

  private onRandomizeControlChanges() {
    this.formGroup
      .get('randomizeClasses')
      ?.valueChanges.subscribe((randomize) => {
        let formControl;
        randomizeOptions.forEach((name) => {
          formControl = this.formGroup.get(name);
          randomize
            ? formControl?.enable({ emitEvent: false })
            : formControl?.disable({ emitEvent: false });
        });
      });
  }
}
