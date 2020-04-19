import { Component, OnInit, Input } from '@angular/core';
import { ImageTile } from './image-tile';

@Component({
  selector: 'app-image-tile',
  templateUrl: './image-tile.component.html',
  styleUrls: ['./image-tile.component.scss']
})
export class ImageTileComponent implements OnInit {
  @Input() tiles: ImageTile[];

  constructor() { }

  ngOnInit(): void {
  }

}
