import { MapViewerComponent } from './components/map-viewer/map-viewer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { TechnosComponent } from './components/technos/technos.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { TitleComponent } from './components/title/title.component';
import { HttpClientModule } from  '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CustomSliderComponent } from './components/custom-slider/custom-slider.component';
import { ContactFormComponent } from './components/forms/contact-form/contact-form.component';
import { IndustryComponent } from './components/industry/industry.component';
import { GoogleMapsModule } from '@angular/google-maps';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    TechnosComponent,
    FooterComponent,
    TeamComponent,
    ContactFormComponent,
    AboutUsComponent,
    HomeComponent,
    NavComponent,
    TitleComponent,
    NotFoundComponent,
    CustomSliderComponent,
    ContactComponent,
    IndustryComponent,
    MapViewerComponent

  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
