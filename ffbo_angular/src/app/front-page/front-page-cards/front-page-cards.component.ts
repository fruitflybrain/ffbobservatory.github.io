import { FrontPageCard } from './../front-page.component';
import { Component, OnInit, Input} from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-front-page-cards',
  templateUrl: './front-page-cards.component.html',
  styleUrls: ['./front-page-cards.component.scss']
})
export class FrontPageCardsComponent implements OnInit {

  @Input() data: FrontPageCard;
  desc: any;

  constructor(private markdownService: MarkdownService) { }

  ngOnInit(): void {
    this.desc = this.markdownService.compile(this.data.desc);
  }

}
