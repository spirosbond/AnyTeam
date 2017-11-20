import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TeamProvider} from "../../providers/team/team";
import {LocalNotifications} from '@ionic-native/local-notifications';

/**
 * Generated class for the TeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {

  roster: any[];
  team: any;
  on: boolean[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public teamProvider: TeamProvider, private localNotifications: LocalNotifications) {
    this.roster = [];
    this.team = navParams.get("team");
    this.on = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamPage');
    this.roster = this.team.players;
  }

  public gameNotify(index){
    if(this.on[index]==true)
      this.on[index] = false;
    else {
      this.on[index] = true;

      this.localNotifications.schedule({
        id: 1,
        text: 'You will receive notifications for this game...',
        sound: null,
        data: { secret: "key" }
      });
    }
  }

}
