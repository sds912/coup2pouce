import { BlogComponent } from './../blog/blog.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { JobPageComponent } from './pages/job-page/job-page.component';
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
   },
   {
    path: 'nos-services',
    component: ServicePageComponent
   },
   {
    path: 'contactez-nous',
    component: ContactUsComponent
   },

   {
    path: "nous-rejoindre",
    component: JobPageComponent
   }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
