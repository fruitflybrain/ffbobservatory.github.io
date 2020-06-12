import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxCarouselModule } from 'igniteui-angular';
import { BrainmapsRoutingModule } from './brainmaps-routing.module';
import { BrainmapsComponent } from './brainmaps.component';
import { MapCardComponent } from './map-card/map-card.component';


@NgModule({
  declarations: [BrainmapsComponent, MapCardComponent],
  imports: [
    CommonModule,
    BrainmapsRoutingModule,
    MatCardModule,
    HttpClientModule,
    IgxCarouselModule
  ]
})
export class BrainmapsModule { }
