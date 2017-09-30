import {Component, ViewChild} from '@angular/core';
import {Nav, NavController, NavParams} from 'ionic-angular';
import {TeamProvider} from "../../providers/team/team";
import {TeamPage} from "../team/team";

/**
 * Generated class for the TeamListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-team-list',
  templateUrl: 'team-list.html',
})
export class TeamListPage {

  teams: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public teamProvider: TeamProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamListPage');
    this.teams = this.teamProvider.getAllTeams();
  }

  public showTeam(team){
    this.navCtrl.push(TeamPage)
  }

}
