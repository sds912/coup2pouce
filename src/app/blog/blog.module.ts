import { BlogRoutingModule } from './blog-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';



@NgModule({
  declarations: [
    BlogComponent,
    HomePageComponent,
    ArticleDetailsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
