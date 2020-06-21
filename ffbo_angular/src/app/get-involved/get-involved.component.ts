import { Component, OnInit } from '@angular/core';
import { Profile } from './get-involved';
import { TEAM } from '../../assets/get-involved/team';
import { ALUMNI } from '../../assets/get-involved/alumni';
import { COLLABORATORS } from '../../assets/get-involved/collaborators';
import { CONTRIBUTORS } from '../../assets/get-involved/contributors';

const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';

@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.scss']
})
export class GetInvolvedComponent implements OnInit {
  team: Profile[];
  alumni: Profile[];
  collaborators: Profile[];
  contributors: Profile[];

  constructor() { }

  sortByLastName(profileArray: Profile[]): Profile[] {
    return profileArray.sort((p1, p2) => {
      const lastName1 = p1.name.split(' ').pop();
      const lastName2 = p2.name.split(' ').pop();
      if ( !ALPHABETS.includes(lastName1.toLowerCase()[0]) ||
           !ALPHABETS.includes(lastName2.toLowerCase()[0])
      ){
        return 0;
      }

      if (lastName1.toLowerCase()[0] > lastName2.toLowerCase()[0]) {
          return 1;
      }
      if (lastName1.toLowerCase()[0] < lastName2.toLowerCase()[0]) {
          return -1;
      }
      return 0;
    });
  }

  ngOnInit(): void {
    this.team = this.sortByLastName(TEAM);
    this.alumni = this.sortByLastName(ALUMNI);
    this.collaborators = this.sortByLastName(COLLABORATORS);
    this.contributors = this.sortByLastName(CONTRIBUTORS);
  }

}
