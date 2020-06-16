// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, AfterViewInit } from '@angular/core';
import { FFBODescription } from '../../ffbo-description';
import { FFBOComponentDialogComponent } from '../ffbo-component-dialog/ffbo-component-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { BACKGROUND } from '../../../assets/front-page/background';
import { OVERVIEW } from '../../../assets/front-page/overview';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements AfterViewInit {
  backgroundImg = 'assets/front-page/img/brain.png';
  backgroundVid = 'assets/front-page/img/bannervideo.mp4';
  overview: FFBODescription = OVERVIEW;
  background: FFBODescription = BACKGROUND;
  // backgroundVidURL: SafeResourceUrl;

  constructor(
    public dialog: MatDialog,
    // private sanitizer: DomSanitizer
  ) {
    // this.backgroundVidURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/bPj5V_pqNuU');
  }

  ngAfterViewInit(): void {
    // const div = document.getElementById('banner-background-video') as HTMLVideoElement;
    // const vid = document.createElement('source');
    // vid.src = this.backgroundVid;
    // vid.type = 'video/mp4';
    // div.insertBefore(vid, div.firstChild);
    // div.autoplay =  true;
  }

  openDialog(name: string): void {
    switch (name) {
      case 'background':
        this.dialog.open(FFBOComponentDialogComponent, {
          width: '80%',
          maxWidth: '800px',
          data: this.background
        });
        break;
      case 'overview':
        this.dialog.open(FFBOComponentDialogComponent, {
          width: '80%',
          maxWidth: '800px',
          data: this.overview
        });
        break;
      default:
        break;
    }
  }

}
