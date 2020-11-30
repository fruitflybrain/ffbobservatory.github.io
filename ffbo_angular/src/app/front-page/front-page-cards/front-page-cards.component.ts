import { FrontPageCard } from './../front-page.component';
import { Component, OnInit, Input} from '@angular/core';
import marked from 'marked';


@Component({
  selector: 'app-front-page-cards',
  templateUrl: './front-page-cards.component.html',
  styleUrls: ['./front-page-cards.component.scss']
})
export class FrontPageCardsComponent implements OnInit {

  @Input() data: FrontPageCard;
  md: any;
  desc: any;

  constructor() { 
    this.md = marked.setOptions({})
  }

  ngOnInit(): void {
    this.desc = this.md.parse(this.data.desc);
  }

}
