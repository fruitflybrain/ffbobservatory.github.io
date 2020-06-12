import { BrainMap } from './../brainmaps';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.scss']
})
export class MapCardComponent implements OnInit {
  @Input() content: BrainMap;
  placeholder = '/assets/img/placeholder.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
