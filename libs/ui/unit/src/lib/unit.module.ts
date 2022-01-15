import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitComponent } from './components/unit/unit.component';
import { UnitListComponent } from './components/unit-list/unit-list.component';
import { TuiModeModule } from '@taiga-ui/core';

@NgModule({
  imports: [CommonModule, TuiModeModule],
  declarations: [UnitComponent, UnitListComponent],
  exports: [UnitComponent, UnitListComponent],
})
export class UnitModule {}
