
import { Component, OnInit, Input } from '@angular/core';
import { BrainMapVizCard } from '../brainmapsviz.component';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-map-viz-card',
  templateUrl: './map-viz-card.component.html',
  styleUrls: ['./map-viz-card.component.scss']
})
export class MapVizCardComponent implements OnInit {
  @Input() data: BrainMapVizCard;

  desc: any;

  constructor(private markdownService: MarkdownService) {}

  ngOnInit(): void {
    this.desc = this.markdownService.compile(this.data.desc);
  }

}
