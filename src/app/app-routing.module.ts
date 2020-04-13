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
    path: 'licenses-and-credits',
    loadChildren: () => import('./licenses-and-credits/licenses-and-credits.module').then(m => m.LicensesAndCreditsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
