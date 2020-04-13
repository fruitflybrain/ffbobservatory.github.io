import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicensesAndCreditsRoutingModule } from './licenses-and-credits-routing.module';
import { LicensesAndCreditsComponent } from './licenses-and-credits.component';


@NgModule({
  declarations: [LicensesAndCreditsComponent],
  imports: [
    CommonModule,
    LicensesAndCreditsRoutingModule
  ]
})
export class LicensesAndCreditsModule { }
