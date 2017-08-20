import {Component} from '@angular/core';
import {IonicPage, Loading, LoadingController, NavController, Platform} from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {Feed, FeedItem, FeedProvider} from "../../providers/feed/feed";

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  articles: FeedItem[];
  selectedFeed: Feed;
  inAppBrowserOptions = 'location=no';

  constructor(public navCtrl: NavController, public iab: InAppBrowser, public platform: Platform, public feedProvider: FeedProvider, public loadingCtrl: LoadingController) {

    this.selectedFeed = new Feed('Android Police', 'http://www.androidpolice.com/feed/');

  }

  public loadArticles(): void {
    // this.loading = true;
    let loading = this.presentLoadingDefault();
    this.articles = [];
    this.feedProvider.getArticlesForUrl(this.selectedFeed.url).subscribe(res => {
      this.articles = res;
      loading.dismiss()
      // this.loading = false;
    });
  }

  public navBarButtonClicked(clickedButtonId): void {
    if (clickedButtonId == 'refresh') {
      this.loadArticles();
    }
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.loadArticles();
    });
  }

  public openArticle(url: string) {
    this.iab.create(url, '_blank', this.inAppBrowserOptions);
    // window.open(url, '_blank');
  }

  public presentLoadingDefault(): Loading {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
    return loading;
  }

}
