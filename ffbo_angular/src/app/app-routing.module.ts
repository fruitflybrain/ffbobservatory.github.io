import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./front-page/front-page.module').then(m => m.FrontPageModule)
  },
  {
    path: 'get-involved',
    loadChildren: () => import('./get-involved/get-involved.module').then(m => m.GetInvolvedModule)
  },
  {
    path: 'front-page',
    loadChildren: () => import('./front-page/front-page.module').then(m => m.FrontPageModule)
  },
  {
    path: 'innovations',
    loadChildren: () => import('./innovations/innovations.module').then(m => m.InnovationsModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'brainmapsviz',
    loadChildren: () => import('./brainmapsviz/brainmapsviz.module').then(m => m.BrainmapsvizModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
