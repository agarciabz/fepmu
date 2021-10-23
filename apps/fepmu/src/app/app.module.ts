import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckboxModule } from '@fepmu/ui/checkbox';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CheckboxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
