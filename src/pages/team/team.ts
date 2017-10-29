import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TeamProvider} from "../../providers/team/team";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public teamProvider: TeamProvider) {
    this.roster = [];
    this.team = navParams.get("team");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamPage');
    this.roster = this.team.players;
  }

}
