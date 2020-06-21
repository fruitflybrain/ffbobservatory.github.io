import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { GetInvolvedRoutingModule } from './get-involved-routing.module';
import { GetInvolvedComponent } from './get-involved.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';


@NgModule({
  declarations: [
    GetInvolvedComponent,
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    GetInvolvedRoutingModule,
    MatCardModule
  ]
})
export class GetInvolvedModule { }
