import { AboutUsComponent } from './components/about-us/about-us.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HowWeWorkComponent } from './components/how-we-work/how-we-work.component';
import { CompanyWorkingWhithComponent } from './components/company-working-whith/company-working-whith.component';
import { TemonialsComponent } from './components/temonials/temonials.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { MapViewerComponent } from './components/map-viewer/map-viewer.component';
import { IndustryComponent } from './components/industry/industry.component';
import { ContactComponent } from './components/contact/contact.component';
import { CustomSliderComponent } from './components/custom-slider/custom-slider.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TitleComponent } from './components/title/title.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactFormComponent } from './components/forms/contact-form/contact-form.component';
import { TeamComponent } from './components/team/team.component';
import { FooterComponent } from './components/footer/footer.component';
import { TechnosComponent } from './components/technos/technos.component';
import { ServicesComponent } from './components/services/services.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { StarRatingModule } from 'angular-star-rating';
import { GoogleMapsModule } from '@angular/google-maps';
import { BlogNewArticlesComponent } from './components/blog-new-articles/blog-new-articles.component';
import { SharedModule } from '../shared/shared.module';
import { ArticleCardComponent } from '../shared/components/article-card/article-card.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    HeaderComponent,
    ServicesComponent,
    TechnosComponent,
    FooterComponent,
    TeamComponent,
    ContactFormComponent,
    AboutUsComponent,
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
    HowWeWorkComponent,
    HomeComponent,
    BlogNewArticlesComponent,
    ArticleCardComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    NgImageSliderModule,
    CarouselModule,
    StarRatingModule.forRoot(),
    GoogleMapsModule


  ]
})
export class LandingPageModule { }
