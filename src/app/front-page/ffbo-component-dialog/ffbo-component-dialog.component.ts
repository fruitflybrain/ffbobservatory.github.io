import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FFBODescription} from '../ffbo-description';

@Component({
  selector: 'app-ffbo-component-dialog',
  templateUrl: './ffbo-component-dialog.component.html',
  styleUrls: ['./ffbo-component-dialog.component.scss']
})
export class FFBOComponentDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<FFBOComponentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FFBODescription) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  redirectSlides(): void{
    if (this.data.slides) {
      window.location.href = this.data.slides;
    }
  }

  redirectURL(): void{
    if (this.data.url) {
      window.location.href = this.data.url;
    }
  }

  redirectPublication(): void{
    if (this.data.publication) {
      window.location.href = this.data.publication;
    }
  }

}
