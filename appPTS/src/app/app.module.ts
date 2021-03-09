import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ndef, NFC } from '@ionic-native/nfc/ngx';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CardComponent } from './components/card/card.component';
import { ReceiverAuthenticationComponent } from './components/receiver-authentication/receiver-authentication.component';
import { ReceiverHomeComponent } from './components/receiver-home/receiver-home.component';
import { ReceiverCardComponent } from './components/receiver-card/receiver-card.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

@NgModule({
  declarations: [
    AppComponent, 
    AuthenticationComponent,
    ReceiverAuthenticationComponent,
    HomeComponent,
    ReceiverHomeComponent,
    CourseComponent,
    SettingsComponent,
    CardComponent,
    ReceiverCardComponent,
    TaskDetailComponent
  ],
  entryComponents: [
    AuthenticationComponent
  ],
  imports: [
    BrowserModule, 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [
    NFC,
    Ndef,
    StatusBar,
    SplashScreen,
    HomeComponent,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
