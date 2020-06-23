import { FrontPageCard } from './../front-page.component';
import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-front-page-cards',
  templateUrl: './front-page-cards.component.html',
  styleUrls: ['./front-page-cards.component.scss']
})
export class FrontPageCardsComponent implements OnInit {

  @Input() data: FrontPageCard;

  constructor() { }

  ngOnInit(): void {
  }

}
