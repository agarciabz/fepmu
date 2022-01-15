import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeHousesFormComponent } from './components/three-houses-form/three-houses-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiCheckboxLabeledModule,
  TuiDataListWrapperModule,
  TuiInputCountModule,
  TuiSelectModule,
} from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiModeModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { ThreeHousesContainerComponent } from './containers/three-houses-container/three-houses-container.component';
import { UnitModule } from '@fepmu/ui/unit';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiCheckboxLabeledModule,
    TuiInputCountModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    TuiModeModule,
    UnitModule,
  ],
  declarations: [ThreeHousesFormComponent, ThreeHousesContainerComponent],
  exports: [ThreeHousesFormComponent, ThreeHousesContainerComponent],
})
export class ThreeHousesModule {}
