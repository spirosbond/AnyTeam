import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TeamProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TeamProvider {

  teams: any[] = [
    {
      name: 'Team 1',
      picture: "http://thesportsfanjournal.com/wp-content/uploads/2012/02/Nike-Basketball-Innovation-Su12-USAB-team-original.jpg",
      players: [
        {
          name: 'Giannis',
          surname: 'Antetokounmpo',
          position: 'SF',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203507.png'
        },
        {
          name: 'Bojan',
          surname: 'Bogdanovic',
          position: 'SF',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202711.png'
        },
        {
          name: 'Jimmy',
          surname: 'Butler',
          position: 'SG',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202710.png'
        },
        {
          name: 'Stephen',
          surname: 'Curry',
          position: 'PG',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201939.png'
        },
        {
          name: 'DeMar',
          surname: 'DeRozan',
          position: 'SG',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201942.png'
        }
      ],
      feedToggle: false
    },
    {
      name: 'Team 2',
      picture: "http://thesportsfanjournal.com/wp-content/uploads/2012/02/Nike-Basketball-Innovation-Su12-USAB-team-original.jpg",
      players: [
        {
          name: 'Giannis',
          surname: 'Antetokounmpo',
          position: 'SF',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203507.png'
        },
        {
          name: 'Bojan',
          surname: 'Bogdanovic',
          position: 'SF',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202711.png'
        },
        {
          name: 'Jimmy',
          surname: 'Butler',
          position: 'SG',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202710.png'
        },
        {
          name: 'Stephen',
          surname: 'Curry',
          position: 'PG',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201939.png'
        },
        {
          name: 'DeMar',
          surname: 'DeRozan',
          position: 'SG',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201942.png'
        }
      ],
      feedToggle: false
    },
    {
      name: 'Team 3',
      picture: "http://thesportsfanjournal.com/wp-content/uploads/2012/02/Nike-Basketball-Innovation-Su12-USAB-team-original.jpg",
      players: [
        {
          name: 'Giannis',
          surname: 'Antetokounmpo',
          position: 'SF',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203507.png'
        },
        {
          name: 'Bojan',
          surname: 'Bogdanovic',
          position: 'SF',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202711.png'
        },
        {
          name: 'Jimmy',
          surname: 'Butler',
          position: 'SG',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202710.png'
        },
        {
          name: 'Stephen',
          surname: 'Curry',
          position: 'PG',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201939.png'
        },
        {
          name: 'DeMar',
          surname: 'DeRozan',
          position: 'SG',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201942.png'
        }
      ],
      feedToggle: false
    },
    {
      name: 'Team 4',
      picture: "http://thesportsfanjournal.com/wp-content/uploads/2012/02/Nike-Basketball-Innovation-Su12-USAB-team-original.jpg",
      players: [
        {
          name: 'Giannis',
          surname: 'Antetokounmpo',
          position: 'SF',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203507.png'
        },
        {
          name: 'Bojan',
          surname: 'Bogdanovic',
          position: 'SF',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202711.png'
        },
        {
          name: 'Jimmy',
          surname: 'Butler',
          position: 'SG',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202710.png'
        },
        {
          name: 'Stephen',
          surname: 'Curry',
          position: 'PG',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201939.png'
        },
        {
          name: 'DeMar',
          surname: 'DeRozan',
          position: 'SG',
          picture: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201942.png'
        }
      ],
      feedToggle: false
    }
  ];

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello TeamProvider Provider');
    this.createDemoTeams();
  }

  /**Get all teams
   *
   * @returns {any[]}
   */
  public loadAllTeams(response: any[]) {
    this.storage.get("Team 1").then((val) => {
      if (val != null)
        response.push(val);
    });
    this.storage.get("Team 2").then((val) => {
      if (val != null)
        response.push(val);
    });
    this.storage.get("Team 3").then((val) => {
      if (val != null)
        response.push(val);
    });
    this.storage.get("Team 4").then((val) => {
      if (val != null)
        response.push(val);
    });
  }

  /**Get the roster of a team
   *
   * @param team
   * @returns {Array}
   */
  public getRoster(team) {
    return this.teams[1].players;
  }

  /** Get team by name
   **/
  public loadTeam(name, response) {
    return this.storage.get(name).then((val) => {
      if (val != null)
        response = val;
    });
  }

  public setFeedToggle(team, value) {
    team.feedToggle = value;
    this.storage.set(team.name, team);

  }

  public createDemoTeams() {
    this.storage.get("Team 1").then((val) => {
      if (val == null) {
        console.log("Team 1 not id db. Creating...");
        this.storage.set("Team 1", this.teams[0]);
      }
    });
    this.storage.get("Team 2").then((val) => {
      if (val == null) {
        console.log("Team 2 not id db. Creating...");
        this.storage.set("Team 2", this.teams[1]);
      }
    });
    this.storage.get("Team 3").then((val) => {
      if (val == null) {
        console.log("Team 3 not id db. Creating...");
        this.storage.set("Team 3", this.teams[2]);
      }
    });
    this.storage.get("Team 4").then((val) => {
      if (val == null) {
        console.log("Team 4 not id db. Creating...");
        this.storage.set("Team 4", this.teams[3]);
      }
    });
  }
}
