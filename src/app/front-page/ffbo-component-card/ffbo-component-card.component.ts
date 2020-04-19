import { Component, OnInit, Input } from '@angular/core';
import { FFBODescription } from '../ffbo-description';
import { FFBOComponentDialogComponent } from '../ffbo-component-dialog/ffbo-component-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ffbo-component-card',
  templateUrl: './ffbo-component-card.component.html',
  styleUrls: ['./ffbo-component-card.component.scss']
})
export class FFBOComponentCardComponent implements OnInit {
  isActive = false;

  @Input()
  data: FFBODescription;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FFBOComponentDialogComponent, {
      width: '80%',
      maxWidth: '1000px',
      data: this.data
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
}
