import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitComponent } from './components/unit/unit.component';
import { UnitListComponent } from './components/unit-list/unit-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UnitComponent,
    UnitListComponent
  ],
  exports: [
    UnitComponent,
    UnitListComponent
  ],
})
export class UnitModule {}
