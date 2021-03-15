import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  PostsComponent,
} from './posts.component';

// Posts Router captures all sub URLs and uses the PostComponent's
// ActivatedRouter callback to display the correct page
const routes: Routes = [
  { path: '**', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
