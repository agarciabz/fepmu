import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Character, CharacterClass } from '@fepmu/data/three-houses';

@Component({
  selector: 'fepmu-unit',
  templateUrl: './unit.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitComponent {
  @Input()
  public unit: Character | undefined;

  @Input()
  public class: CharacterClass | undefined;
}
