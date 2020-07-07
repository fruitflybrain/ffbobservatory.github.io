import { Component, Input, Inject, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AssetService } from './../../asset.service';
import { GalleryItem } from './gallery-item';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterViewInit {
  @Input() tiles: GalleryItem[];
  // @ViewChild('divToMeasure')  divToMeasureElement: ElementRef;
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


  ngAfterViewInit(): void {
    this.asset.getGallery().subscribe(
      data => {
        console.log('Got Gallery', data);
        this.tiles = data;
      },
      error => {
        console.log('Get Gallery Error', error);
      }
    );
    const divToMeasure = document.getElementById('brainmapsviz-gallery');
    const divToMeasureWidth = divToMeasure.offsetWidth;
    console.log('Init Resize', divToMeasureWidth, Math.floor(divToMeasureWidth / 82));

    this.Ncols = (divToMeasureWidth <= 720) ? Math.floor(divToMeasureWidth / 82) : 8;
  }

  onResize(event) {
    console.log('Reszied', event.target.innerWidth, Math.floor(event.target.innerWidth / 82));
    this.Ncols = (event.target.innerWidth <= 720) ? Math.floor(event.target.innerWidth / 82) : 8;
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
