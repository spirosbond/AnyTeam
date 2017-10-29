import {Component} from '@angular/core';
import {Loading, LoadingController, NavController, Platform} from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {Feed, FeedItem, FeedProvider} from "../../providers/feed/feed";
import {SocialSharing} from "@ionic-native/social-sharing";

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  articles: FeedItem[];
  selectedFeed: Feed;
  inAppBrowserOptions = 'location=no';
  loading: Loading;

  constructor(public navCtrl: NavController, public iab: InAppBrowser, public platform: Platform, public feedProvider: FeedProvider, public loadingCtrl: LoadingController, public socialSharing: SocialSharing) {

    this.selectedFeed = new Feed('NBA.com: News', 'http://www.nba.com/rss/nba_rss.xml');

  }

  public loadArticles(): void {

    this.articles = [];
    this.feedProvider.getArticlesForUrl(this.selectedFeed.url).subscribe(res => {
      this.articles = res;
      this.loading.dismiss()

    });
  }

  public navBarButtonClicked(clickedButtonId): void {
    if (clickedButtonId == 'refresh') {
      this.loading = this.presentLoadingDefault();
      this.loadArticles();
    }
  }

  public pullToRefresh(refresher) {
    setTimeout(() => {
      this.loadArticles();
      refresher.complete();
    }, 5000);
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.loading = this.presentLoadingDefault();
      this.loadArticles();
    });
  }

  public openArticle(url: string) {
    this.iab.create(url, '_blank', this.inAppBrowserOptions);
    // window.open(url, '_blank');
  }

  public presentLoadingDefault(): Loading {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
    return this.loading;
  }

}
