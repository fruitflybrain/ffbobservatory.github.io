import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule} from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxMdModule } from 'ngx-md';


import { FFBOComponentDialogComponent } from './ffbo-component-dialog/ffbo-component-dialog.component';
import { FFBOComponentCardComponent } from './ffbo-component-card/ffbo-component-card.component';

import { FrontPageRoutingModule } from './front-page-routing.module';
import { FrontPageComponent } from './front-page.component';
import { FFBOOverviewCardComponent } from './ffbo-overview-card/ffbo-overview-card.component';
import { ImageTileComponent } from './image-tile/image-tile.component';
import { FrontPageCardsComponent } from './front-page-cards/front-page-cards.component';

@NgModule({
  declarations: [
    BannerComponent,
    FrontPageComponent,
    FFBOComponentDialogComponent,
    FFBOComponentCardComponent,
    FFBOOverviewCardComponent,
    ImageTileComponent,
    FrontPageCardsComponent
  ],
  imports: [
    CommonModule,
    FrontPageRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    MatStepperModule,
    NgxMdModule,
    HttpClientModule
  ],
  exports: [
    FFBOComponentCardComponent
  ],
  providers:[]
})
export class FrontPageModule { }
