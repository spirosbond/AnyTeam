import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {NewsPage} from '../news/news';
import {MyApp} from '../../app/app.component'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NewsPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
