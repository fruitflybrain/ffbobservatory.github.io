import { AssetService } from './../asset.service';
import { Component, OnInit } from '@angular/core';

interface Announcement {
  desc: string;
  url: URL | string;
  show: boolean;
}

@Component({
  selector: 'app-announcement-banner',
  templateUrl: './announcement-banner.component.html',
  styleUrls: ['./announcement-banner.component.scss']
})
export class AnnouncementBannerComponent implements OnInit {
  announcements: Announcement[];

  constructor(private asset: AssetService) { }

  ngOnInit(): void {
    this.asset.getAnnouncements().subscribe(
      data => {
        this.announcements = data;
        console.log('Got Annoucements', data);
      },
      error => {
        console.log('Get Annoucement Error', error);
      }
    );
  }

}
