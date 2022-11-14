import { DashboardRoutingModule } from './dashboard-routing.module';
import { QuillModules } from './../../../node_modules/ngx-quill/config/quill-editor.interfaces.d';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddArticleComponent } from './pages/add-article/add-article.component';
import { QuillConfigModule, QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DashboardComponent,
    HomePageComponent,
    AddArticleComponent
  ],
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    DashboardRoutingModule,
    FormsModule
  ],
  providers: []
})
export class DashboardModule { }
