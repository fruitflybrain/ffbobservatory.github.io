import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../get-involved';
@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  @Input()
  profile: Profile;

  defaultDescription: string = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in',
    'voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  ].join('');

  constructor() { }

  ngOnInit(): void {
  }

}
