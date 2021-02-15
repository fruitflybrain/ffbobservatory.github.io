import { AssetService } from './../asset.service';
import { Component, OnInit, Input } from '@angular/core';
// import marked from 'marked';
import { MarkdownService } from 'ngx-markdown';

const POST_TEMPLATE = `
<div class="page post-container">
<div class="post-markdown">
  <h2 class="mat-display-1 post-title">{{title}}</h2>
  <div markdown class="markdown-body" [innerHTML]="body"></div>
</div>
`;


interface Post {
  title: string | any;
  updated_at: string | any;
  body: string | any;
}


@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  selectedPost: Post = undefined;
  faqs: Post;
  code: Post;
  hackathons: Post;
  workshops: Post;
  tutorials: Post;

  constructor(
    private asset: AssetService,
    private markdownService: MarkdownService
  ) {}

  ngOnInit(): void {
    this.asset.getPosts().subscribe(
      data => {
        this.posts = data;
        this.hackathons = data[0];
        this.code = data[1];
        this.workshops = data[2];
        this.faqs = data[3];

        this.selectedPost = this.hackathons;
      },
      error => {
        console.log('Get Posts Error', error);
      }
    );
  }

}


@Component({
  template: POST_TEMPLATE,
  styleUrls: ['./posts.component.scss']
})
export class WorkshopsComponent implements OnInit {
  title: string;
  @Input() body: string;

  constructor(
    private asset: AssetService,
    private markdownService: MarkdownService
  ) {}


  ngOnInit(): void {
    this.asset.getOnePost(3).subscribe(
      data => {
        this.title = data.title;
        this.body = this.markdownService.compile(data.body);
      },
      error => {
        console.log('Get Posts Error', error);
      }
    );
  }
}


@Component({
  template: POST_TEMPLATE,
  styleUrls: ['./posts.component.scss']
})
export class CodeComponent implements OnInit {
  title: string;
  @Input() body: string;

  constructor(
    private asset: AssetService,
    private markdownService: MarkdownService
  ) {}


  ngOnInit(): void {
    this.asset.getOnePost(2).subscribe(
      data => {
        this.title = data.title;
        this.body = this.markdownService.compile(data.body);
      },
      error => {
        console.log('Get Posts Error', error);
      }
    );
  }
}


@Component({
  template: POST_TEMPLATE,
  styleUrls: ['./posts.component.scss']
})
export class HackathonsComponent implements OnInit {
  title: string;
  @Input() body: string;

  constructor(
    private asset: AssetService,
    private markdownService: MarkdownService
  ) {}

  ngOnInit(): void {
    this.asset.getOnePost(1).subscribe(
      data => {
        this.title = data.title;
        this.body = this.markdownService.compile(data.body);
      },
      error => {
        console.log('Get Posts Error', error);
      }
    );
  }
}


@Component({
  template: POST_TEMPLATE,
  styleUrls: ['./posts.component.scss']
})
export class FAQsComponent implements OnInit {
  title: string;
  @Input() body: string;

  constructor(
    private asset: AssetService,
    private markdownService: MarkdownService
  ) {}

  ngOnInit(): void {
    this.asset.getOnePost(4).subscribe(
      data => {
        this.title = data.title;
        this.body = this.markdownService.compile(data.body);
      },
      error => {
        console.log('Get Posts Error', error);
      }
    );
  }
}


@Component({
  template: POST_TEMPLATE,
  styleUrls: ['./posts.component.scss']
})
export class LicenseComponent implements OnInit {
  title: string;
  @Input() body: string;

  constructor(
    private asset: AssetService,
    private markdownService: MarkdownService
  ) {}

  ngOnInit(): void {
    this.asset.getOnePost(5).subscribe(
      data => {
        this.title = data.title;
        this.body = this.markdownService.compile(data.body);
      },
      error => {
        console.log('Get Posts Error', error);
      }
    );
  }
}

@Component({
  template: POST_TEMPLATE,
  styleUrls: ['./posts.component.scss']
})
export class ExploreFFBOComponent implements OnInit {
  title: string;
  @Input() body: string;

  constructor(
    private asset: AssetService,
    private markdownService: MarkdownService
  ) {}

  ngOnInit(): void {
    this.asset.getOnePost(7).subscribe(
      data => {
        this.title = data.title;
        this.body = this.markdownService.compile(data.body);
      },
      error => {
        console.log('Get Posts Error', error);
      }
    );
  }
}


@Component({
  template: POST_TEMPLATE,
  styleUrls: ['./posts.component.scss']
})
export class TestPostComponent implements OnInit {
  title: string;
  @Input() body: string;

  constructor(
    private asset: AssetService,
    private markdownService: MarkdownService
  ) {}

  ngOnInit(): void {
    this.asset.getOnePost(8).subscribe(
      data => {
        this.title = data.title;
        this.body = this.markdownService.compile(data.body);
      },
      error => {
        console.log('Get Posts Error', error);
      }
    );
  }
}

