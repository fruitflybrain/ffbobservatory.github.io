import { Component, OnInit, Input } from '@angular/core';
import { FFBODescription } from '../ffbo-description';
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
  backgroundImg = 'assets/front-page/img/brain.png';
  backgroundVid = 'assets/front-page/img/bannervideo.mp4';
  overview: FFBODescription = OVERVIEW;
  background: FFBODescription = BACKGROUND;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(name: string): void {
    switch (name) {
      case 'background':
        this.dialog.open(FFBOComponentDialogComponent, {
          width: '80%',
          maxWidth: '500px',
          data: this.background
        });
        break;
      case 'overview':
        this.dialog.open(FFBOComponentDialogComponent, {
          width: '80%',
          maxWidth: '500px',
          data: this.overview
        });
        break;
      default:
        break;
    }
  }

}
