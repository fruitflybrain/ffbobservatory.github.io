import { AssetService } from './../asset.service';
import { Component, OnInit } from '@angular/core';
import marked from 'marked';

const POST_TEMPLATE = `
<div class="page post-container">
<div class="post-markdown">
  <h2 class="mat-display-1">{{title}}</h2>
  <div [innerHTML]="body"></div>
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

  constructor(private asset: AssetService) { }

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
  body: HTMLElement;
  md: any;

  constructor(
    private asset: AssetService
  ) {
    this.md = marked.setOptions({ });
  }


  ngOnInit(): void {
    this.asset.getOnePost(3).subscribe(
      data => {
        this.title = data.title;
        this.body = this.md.parse(data.body);
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
  body: HTMLElement;
  md: any;

  constructor(
    private asset: AssetService
  ) {
    this.md = marked.setOptions({ });
  }


  ngOnInit(): void {
    this.asset.getOnePost(2).subscribe(
      data => {
        this.title = data.title;
        this.body = this.md.parse(data.body);
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
  body: HTMLElement;
  md: any;

  constructor(
    private asset: AssetService
  ) {
    this.md = marked.setOptions({ });
  }


  ngOnInit(): void {
    this.asset.getOnePost(1).subscribe(
      data => {
        this.title = data.title;
        this.body = this.md.parse(data.body);
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
  body: HTMLElement;
  md: any;

  constructor(
    private asset: AssetService
  ) {
    this.md = marked.setOptions({ });
  }


  ngOnInit(): void {
    this.asset.getOnePost(4).subscribe(
      data => {
        this.title = data.title;
        this.body = this.md.parse(data.body);
      },
      error => {
        console.log('Get Posts Error', error);
      }
    );
  }
}
