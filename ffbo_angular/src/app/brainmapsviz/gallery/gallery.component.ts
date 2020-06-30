import { AssetService } from './../../asset.service';
import { Component, OnInit, Input } from '@angular/core';
import { GalleryItem } from './gallery-item';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() tiles: GalleryItem[];
  Ncols = 8; // number of columns in the grid

  constructor(private asset: AssetService ) { }

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
