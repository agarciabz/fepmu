import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostListener,
  forwardRef,
  ChangeDetectorRef
} from '@angular/core';
import { ControlValueAccessor } from '@ngneat/reactive-forms';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export const CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: ' pmu-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(change)': 'onChange($event.target.checked)',
    '(blur)': 'onTouched()'
  },
  providers: [
    CHECKBOX_VALUE_ACCESSOR
  ]
})
export class CheckboxComponent extends ControlValueAccessor<boolean> {

  public value = false;
  public disabled = false;

  @HostListener('change', ['$event.target.checked'])
  onChange = (checked: boolean | null) => {};

  @HostListener('blur')
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


}
