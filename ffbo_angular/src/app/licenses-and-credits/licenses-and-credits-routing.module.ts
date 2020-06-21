import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicensesAndCreditsComponent } from './licenses-and-credits.component';

const routes: Routes = [{ path: '', component: LicensesAndCreditsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicensesAndCreditsRoutingModule { }
