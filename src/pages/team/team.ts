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

  constructor(public navCtrl: NavController, public navParams: NavParams, public teamProvider: TeamProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamPage');
    this.roster = this.teamProvider.getRoster('dummy');
  }

}
