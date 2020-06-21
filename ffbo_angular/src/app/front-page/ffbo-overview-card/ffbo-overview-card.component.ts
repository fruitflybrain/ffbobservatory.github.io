import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ffbo-overview-card',
  templateUrl: './ffbo-overview-card.component.html',
  styleUrls: ['./ffbo-overview-card.component.scss']
})
export class FFBOOverviewCardComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() img: string;

  constructor() { }

  ngOnInit(): void {
  }

}
