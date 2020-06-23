
import { Component, OnInit, Input } from '@angular/core';
import { BrainMapVizCard } from '../brainmapsviz.component';

@Component({
  selector: 'app-map-viz-card',
  templateUrl: './map-viz-card.component.html',
  styleUrls: ['./map-viz-card.component.scss']
})
export class MapVizCardComponent implements OnInit {
  @Input() data: BrainMapVizCard;

  constructor() { }

  ngOnInit(): void {
  }

}
