import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpModule } from '@angular/http';
import {IonicStorageModule} from "@ionic/storage";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { NewsPage } from '../pages/news/news';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedProvider } from '../providers/feed/feed';
import {NavbarComponent} from "../components/navbar/navbar";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    NewsPage,
    TabsPage,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    NewsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FeedProvider,
    InAppBrowser
  ]
})
export class AppModule {}
