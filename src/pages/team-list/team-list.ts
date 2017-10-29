import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public teamProvider: TeamProvider) {
    this.teams = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamListPage');
    this.teamProvider.loadAllTeams(this.teams);

  }

  public feedToggle(team){
    console.log('FeedToggle: '+team.feedToggle);
    this.teamProvider.setFeedToggle(team,team.feedToggle);
  }

  public showTeam(team){
    this.navCtrl.push(TeamPage,{team: team})
  }

}
