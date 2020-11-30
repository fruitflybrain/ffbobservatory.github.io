
import { Component, OnInit, Input } from '@angular/core';
import { BrainMapVizCard } from '../brainmapsviz.component';
import marked from 'marked';

@Component({
  selector: 'app-map-viz-card',
  templateUrl: './map-viz-card.component.html',
  styleUrls: ['./map-viz-card.component.scss']
})
export class MapVizCardComponent implements OnInit {
  @Input() data: BrainMapVizCard;
  
  md: any;
  desc: any;

  constructor() { 
    this.md = marked.setOptions({});
  }

  ngOnInit(): void {
    this.desc = this.md.parse(this.data.desc);
  }

}
