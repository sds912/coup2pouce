import { environment } from './../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { SharedModule } from './shared/shared.module';







@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBsihXKp1XfK-_aBQon36bO6C40GbEhzFc",
    authDomain: "coup2pouce-b7cb3.firebaseapp.com",
    projectId: "coup2pouce-b7cb3",
    storageBucket: "coup2pouce-b7cb3.appspot.com",
    messagingSenderId: "333424420304",
    appId: "1:333424420304:web:90f5b6f7be43e4bc3245d5",
    measurementId: "G-SDSZHJ59FB"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
