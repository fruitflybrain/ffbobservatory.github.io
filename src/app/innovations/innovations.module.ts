
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule, MatList } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';


import { InnovationsRoutingModule } from './innovations-routing.module';
import { InnovationsComponent } from './innovations.component';
import { FrontPageModule } from './../front-page/front-page.module';

@NgModule({
  declarations: [
    InnovationsComponent,
  ],
  imports: [
    CommonModule,
    InnovationsRoutingModule,
    MatCardModule,
    MatTabsModule,
    HttpClientModule,
    FrontPageModule,
    MatExpansionModule,
    MatStepperModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ]
})
export class InnovationsModule { }
