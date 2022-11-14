import { AddArticleComponent } from './pages/add-article/add-article.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent,

   },
   {
    path: 'add',
    component: AddArticleComponent
   }


];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
