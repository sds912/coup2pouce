import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
   },
   {
    path: 'qui-sommes-nous',
    component: AboutUsPageComponent
   }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
