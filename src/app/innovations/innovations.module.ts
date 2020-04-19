
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
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
    FrontPageModule
  ]
})
export class InnovationsModule { }
