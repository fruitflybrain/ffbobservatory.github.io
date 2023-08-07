import { Component, OnInit } from '@angular/core';
import { Profile } from './get-involved';
import { TEAM } from '../../assets/get-involved/team';
import { ALUMNI } from '../../assets/get-involved/alumni';
import { COLLABORATORS } from '../../assets/get-involved/collaborators';
import { CONTRIBUTORS } from '../../assets/get-involved/contributors';
import { AssetService } from '../asset.service';

const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';
const MEMBER_CLASSES = ['team', 'alumni', 'collaborators', 'contributors'];

@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.scss']
})
export class GetInvolvedComponent implements OnInit {
  members: Profile[] = [];
  team: Profile[] = [];
  alumni: Profile[] = [];
  collaborators: Profile[] = [];
  past_collaborators: Profile[] = [];
  contributors: Profile[] = [];

  constructor(private asset: AssetService) { }

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
    // this.team = this.sortByLastName(TEAM);
    // this.alumni = this.sortByLastName(ALUMNI);
    // this.collaborators = this.sortByLastName(COLLABORATORS);
    // this.contributors = this.sortByLastName(CONTRIBUTORS);
    this.getMembers();
  }

  getMembers() {
    this.asset.getMembers().subscribe(
      data => {
        console.log('Got members', data);
        this.members = this.sortByLastName(data);
        this.members.forEach(member => {
          switch (member.role) {
            case 'team':
              this.team.push(member);
              break;
            case 'alumni':
              this.alumni.push(member);
              break;
            case 'collaborators':
              this.collaborators.push(member);
              break;
            case 'past_collaborators':
              this.past_collaborators.push(member);
              break;
            case 'contributors':
              this.contributors.push(member);
              break;
            default:
              break;
          }
        });

      },
      error => {
        console.log('Get members error', error);
      }
    );
  }

}
