import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input} from '@angular/core';
import {Character} from "@fepmu/data/three-houses";

@Component({
  selector: 'fepmu-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnitComponent {

  @Input()
  public unit: Character | undefined;

}