import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {HttpModule} from '@angular/http';
import {IonicStorageModule} from "@ionic/storage";
import {SocialSharing} from '@ionic-native/social-sharing';
import {LocalNotifications} from '@ionic-native/local-notifications';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {NewsPage} from '../pages/news/news';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {FeedProvider} from '../providers/feed/feed';
import {NavbarComponentModule} from "../components/navbar/navbar.module";
import {TeamListPage} from "../pages/team-list/team-list";
import {TeamProvider} from '../providers/team/team';
import {TeamPage} from "../pages/team/team";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    NewsPage,
    TabsPage,
    TeamListPage,
    TeamPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NavbarComponentModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    NewsPage,
    TabsPage,
    TeamListPage,
    TeamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FeedProvider,
    InAppBrowser,
    TeamProvider,
    SocialSharing,
    LocalNotifications
  ]
})
export class AppModule {
}
