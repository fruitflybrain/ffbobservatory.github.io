import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AssetService } from './../../asset.service';
import { GalleryItem } from './gallery-item';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() tiles: GalleryItem[];
  Ncols = 8; // number of columns in the grid

  constructor(
    private asset: AssetService,
    public dialog: MatDialog
  ) { }

  openDialog(url?: string | URL) {
    console.log(`Clicked with ${url}`);
    let dialogRef;
    if (url) {
      dialogRef = this.dialog.open(
        GalleryDialogComponent, {
          width: '80%',
          maxWidth: '800px',
          data: url,
        });
    }
  }


  ngOnInit(): void {
    this.asset.getGallery().subscribe(
      data => {
        console.log('Got Gallery', data);
        this.tiles = data;
      },
      error => {
        console.log('Get Gallery Error', error);
      }
    );
  }

}


@Component({
  selector: 'app-gallery-dialog',
  templateUrl: 'gallery-dialog.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public url: any) { }

}
