import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { PlayStation } from '../pages/play-station/play-station';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Media} from '@ionic-native/media';
import { Toast } from "@ionic-native/toast";
import { OneFiberDashboard } from '../pages/one-fiber-dashboard/one-fiber-dashboard';
import { MaterialIconsModule } from 'ionic2-material-icons';
import { HomePage } from '../pages/home/home';
import { Summary} from '../pages/summary/summary'

@NgModule({
  declarations: [
    MyApp,
    PlayStation,
    OneFiberDashboard,
    HomePage,
    Summary
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MaterialIconsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PlayStation,
    OneFiberDashboard,
    HomePage,
    Summary
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Media,
    Toast,
   // MediaObject,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
