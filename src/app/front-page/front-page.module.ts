import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';

import { FFBOComponentDialogComponent } from './ffbo-component-dialog/ffbo-component-dialog.component';
import { FFBOComponentCardComponent } from './ffbo-component-card/ffbo-component-card.component';

import { FrontPageRoutingModule } from './front-page-routing.module';
import { FrontPageComponent } from './front-page.component';
import { InnovationsComponent } from './innovations/innovations.component';




@NgModule({
  declarations: [
    BannerComponent,
    FrontPageComponent,
    FFBOComponentDialogComponent,
    FFBOComponentCardComponent,
    InnovationsComponent
  ],
  imports: [
    CommonModule,
    FrontPageRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    FontAwesomeModule,
    HttpClientModule,
    MatTabsModule
  ]
})
export class FrontPageModule { }
