import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrainmapsRoutingModule } from './brainmaps-routing.module';
import { BrainmapsComponent } from './brainmaps.component';


@NgModule({
  declarations: [BrainmapsComponent],
  imports: [
    CommonModule,
    BrainmapsRoutingModule
  ]
})
export class BrainmapsModule { }
