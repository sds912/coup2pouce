import { NotFoundComponent } from './landing-page/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
   },
   {
    path:'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
   },
   {
    path:'admin',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
   },
  { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
