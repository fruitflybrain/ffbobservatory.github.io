import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  PostsComponent,
  LicenseComponent,
  FAQsComponent,
  WorkshopsComponent,
  CodeComponent,
  HackathonsComponent,
  TestPostComponent,
  ExploreFFBOComponent,
  ResourcesComponent
} from './posts.component';

const routes: Routes = [
  { path: 'faqs', component: FAQsComponent },
  { path: 'code', component: CodeComponent },
  { path: 'hackathons', component: HackathonsComponent },
  { path: 'workshops', component: WorkshopsComponent },
  { path: 'licenses', component: LicenseComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'explore_ffbo', component: ExploreFFBOComponent },
  { path: 'test_post', component: TestPostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
