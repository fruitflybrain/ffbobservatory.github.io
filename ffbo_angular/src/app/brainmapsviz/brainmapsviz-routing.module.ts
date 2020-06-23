import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrainmapsvizComponent } from './brainmapsviz.component';

const routes: Routes = [{ path: '', component: BrainmapsvizComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrainmapsvizRoutingModule { }
