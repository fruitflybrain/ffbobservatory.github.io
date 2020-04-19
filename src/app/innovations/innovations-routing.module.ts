import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InnovationsComponent } from './innovations.component';

const routes: Routes = [{ path: '', component: InnovationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnovationsRoutingModule { }
