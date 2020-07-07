import { AssetService } from './../../asset.service';
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
  // backgroundImg = 'assets/front-page/img/brain.png';
  // backgroundVid = 'assets/front-page/img/bannervideo.mp4';
  overview: FFBODescription = OVERVIEW;
  background: FFBODescription = BACKGROUND;
  backgroundVidURL: string | URL | any;

  constructor(
    public dialog: MatDialog,
    private asset: AssetService
  ) {
    // this.backgroundVidURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/bPj5V_pqNuU');
  }

  ngAfterViewInit(): void {
    this.getVideo();
    // const videoDOM = document.getElementById('banner-background-video') as HTMLVideoElement;
    // videoDOM.play();
  }

  openDialog(name: string): void {
    switch (name) {
      case 'background':
        this.dialog.open(FFBOComponentDialogComponent, {
          width: '80%',
          maxWidth: '800px',
          data: this.background,
          hasBackdrop: true,
          backdropClass: 'ffbo-dialog-backdrop'
        });
        break;
      case 'overview':
        this.dialog.open(FFBOComponentDialogComponent, {
          width: '80%',
          maxWidth: '800px',
          data: this.overview,
          hasBackdrop: true,
          backdropClass: 'ffbo-dialog-backdrop'
        });
        break;
      default:
        break;
    }
  }

  getVideo() {
    this.asset.getFrontPageVideo().subscribe(
      data => {
        const videos = data.sort((v1, v2) => {
          return v1.updated_at <= v2.updated_at ? 1: -1;
        });
        console.log('Got video', videos);
        this.backgroundVidURL = videos[0].videofile;
      },
      error => {
        console.log('Get video error', error);
      }
    );
  }
}
