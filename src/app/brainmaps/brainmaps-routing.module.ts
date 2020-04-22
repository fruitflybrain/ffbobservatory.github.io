import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrainmapsComponent } from './brainmaps.component';

const routes: Routes = [{ path: '', component: BrainmapsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrainmapsRoutingModule { }
