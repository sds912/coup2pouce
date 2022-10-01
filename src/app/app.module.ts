import { MapViewerComponent } from './components/map-viewer/map-viewer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { TemonialsComponent } from './components/temonials/temonials.component';
import { CompanyWorkingWhithComponent } from './components/company-working-whith/company-working-whith.component';
import { HowWeWorkComponent } from './components/how-we-work/how-we-work.component';




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
    MapViewerComponent,
    OurWorkComponent,
    TemonialsComponent,
    CompanyWorkingWhithComponent,
    HowWeWorkComponent

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    GoogleMapsModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule,
    CarouselModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
