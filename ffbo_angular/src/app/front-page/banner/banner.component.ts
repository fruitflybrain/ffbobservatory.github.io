import { AssetService } from './../../asset.service';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
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
export class BannerComponent implements OnInit {
  // backgroundImg = 'assets/front-page/img/brain.png';
  // backgroundVid = 'assets/front-page/img/bannervideo.mp4';
  overview: FFBODescription = OVERVIEW;
  background: FFBODescription = BACKGROUND;
  backgroundVidURL: string | URL | any;
  backgroundImg: string | URL | any;
  showImage = false;
  constructor(
    public dialog: MatDialog,
    private asset: AssetService
  ) {
    // this.backgroundVidURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/bPj5V_pqNuU');
  }

  ngOnInit(): void {
    const userAgentstring = window.navigator.userAgent;
    this.showImage = userAgentstring.indexOf('Chrome') < 0 && userAgentstring.indexOf('Safari') > -1;
    // this.showImage = false;
    // this.showImage = true;
    this.getVideo();
    window.addEventListener('load', async () => {
      setTimeout( async () => {
      let video:any = document.querySelector('video[muted][autoplay]');
      video.muted = true;
      console.log(video);
      try {
        await video.play();
      } catch (err) {
        video.controls = true;
        console.log(err);
      }
    }, 1000)});
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

  onVideoError() {
    console.log('Video error');
    this.showImage = true;
  }

  getVideo() {
    this.asset.getFrontPageVideo().subscribe(
      data => {
        const videos = data.sort((v1, v2) => {
          return v1.updated_at <= v2.updated_at ? 1: -1;
        });
        console.log('Got video', videos);
        this.backgroundVidURL ='https://data.flybrainlab.fruitflybrain.org/videos/FFBO_Website_Banner_Dark_SUvMpvi.m4v';
        this.backgroundImg = 'https://data.flybrainlab.fruitflybrain.org/videos/ffbo.gif';
      },
      error => {
        console.log('Get video error', error);
      }
    );
  }
}
