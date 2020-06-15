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

  defaultDescription = `Member of the FFBO Team (placeholder)`;

  constructor() { }

  ngOnInit(): void {
  }

}
