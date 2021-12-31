import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Character } from '@fepmu/data/three-houses';

@Component({
  selector: 'fepmu-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitListComponent {
  @Input()
  public units: Character[] | null = [];

  @Input()
  public bgColor = 'bg-slate-200';
}
