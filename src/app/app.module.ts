import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { TechnosComponent } from './components/technos/technos.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/forms/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { TitleComponent } from './components/title/title.component';
import { HttpClientModule } from  '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CustomSliderComponent } from './components/custom-slider/custom-slider.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    TechnosComponent,
    FooterComponent,
    TeamComponent,
    ContactComponent,
    AboutUsComponent,
    HomeComponent,
    NavComponent,
    TitleComponent,
    NotFoundComponent,
    CustomSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
