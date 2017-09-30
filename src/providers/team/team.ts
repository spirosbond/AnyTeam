import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TeamProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TeamProvider {

  teams: any[] = [
    {name: 'Team 1', picture: "http://thesportsfanjournal.com/wp-content/uploads/2012/02/Nike-Basketball-Innovation-Su12-USAB-team-original.jpg", players: [
      {name: 'Giannis', surname:'Antetokounmpo', position: 'SF', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203507.png'},
      {name: 'Bojan', surname:'Bogdanovic', position: 'SF', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202711.png'},
      {name: 'Jimmy', surname:'Butler', position: 'SG', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202710.png'},
      {name: 'Stephen', surname:'Curry', position: 'PG', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201939.png'},
      {name: 'DeMar', surname:'DeRozan', position: 'SG', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201942.png'}
    ]},
    {name: 'Team 2', picture: "http://thesportsfanjournal.com/wp-content/uploads/2012/02/Nike-Basketball-Innovation-Su12-USAB-team-original.jpg", players: [
      {name: 'Giannis', surname:'Antetokounmpo', position: 'SF', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203507.png'},
      {name: 'Bojan', surname:'Bogdanovic', position: 'SF', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202711.png'},
      {name: 'Jimmy', surname:'Butler', position: 'SG', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202710.png'},
      {name: 'Stephen', surname:'Curry', position: 'PG', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201939.png'},
      {name: 'DeMar', surname:'DeRozan', position: 'SG', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201942.png'}
    ]},
    {name: 'Team 3', picture: "http://thesportsfanjournal.com/wp-content/uploads/2012/02/Nike-Basketball-Innovation-Su12-USAB-team-original.jpg", players: [
      {name: 'Giannis', surname:'Antetokounmpo', position: 'SF', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203507.png'},
      {name: 'Bojan', surname:'Bogdanovic', position: 'SF', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202711.png'},
      {name: 'Jimmy', surname:'Butler', position: 'SG', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202710.png'},
      {name: 'Stephen', surname:'Curry', position: 'PG', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201939.png'},
      {name: 'DeMar', surname:'DeRozan', position: 'SG', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201942.png'}
    ]},
    {name: 'Team 4', picture: "http://thesportsfanjournal.com/wp-content/uploads/2012/02/Nike-Basketball-Innovation-Su12-USAB-team-original.jpg", players: [
      {name: 'Giannis', surname:'Antetokounmpo', position: 'SF', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203507.png'},
      {name: 'Bojan', surname:'Bogdanovic', position: 'SF', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202711.png'},
      {name: 'Jimmy', surname:'Butler', position: 'SG', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202710.png'},
      {name: 'Stephen', surname:'Curry', position: 'PG', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201939.png'},
      {name: 'DeMar', surname:'DeRozan', position: 'SG', picture:'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201942.png'}
    ]}
  ];

  constructor(public http: Http) {
    console.log('Hello TeamProvider Provider');
  }

  /**Get all teams
   *
   * @returns {any[]}
   */
  public getAllTeams(){
    return this.teams;
  }

  /**Get the roster of a team
   *
   * @param team
   * @returns {Array}
   */
  public getRoster(team){
    return this.teams[1].players;
  }

  /** Get team by name
   **/
  public getTeam(name){

  }

}
