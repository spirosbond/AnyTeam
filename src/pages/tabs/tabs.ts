import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {NewsPage} from '../news/news';
import {MyApp} from '../../app/app.component'
import {TeamListPage} from "../team-list/team-list";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NewsPage;
  tab2Root = TeamListPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
