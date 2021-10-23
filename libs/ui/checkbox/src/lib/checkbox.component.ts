import {
  Component,
  ChangeDetectionStrategy,
  HostListener,
  forwardRef,
  ChangeDetectorRef
} from '@angular/core';
import { ControlValueAccessor } from '@ngneat/reactive-forms';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNullish } from '@fepmu/utils';

export const CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: ' pmu-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CHECKBOX_VALUE_ACCESSOR
  ]
})
export class CheckboxComponent extends ControlValueAccessor<boolean> {

  public readonly isNullish = isNullish;

  public value = false;
  public disabled = false;

  @HostListener('change', ['$event.target.checked'])
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = (checked: boolean | null) => {};

  @HostListener('blur')
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  writeValue(value: boolean) {
    this.value = value;
    this.cdr.detectChanges();
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  public setValue(value: boolean) {
    this.value = value;
    this.onChange(value);
  }


}
