import { AssetService } from './../asset.service';
import { Component, OnInit, Input } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { ActivatedRoute } from '@angular/router';

interface Post {
  title: string;
  updated_at: string;
  body: string;
}

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: { [url: string]: Post };  // dictionary of posts keyed by their url
  selectedPost: string;

  constructor(
    private asset: AssetService,
    private markdownService: MarkdownService,
    private route: ActivatedRoute
  ) {
    this.posts = {};
    this.selectedPost = '';
  }

  /**
   * Return list of posts URLs for template indexing
   */
  get postNames(): Array<string> {
    return Object.keys(this.posts);
  }

  ngOnInit(): void {

    // Capture's Router's sub-URL pattern
    // the sub-URL pattern is assumed to one of the keys of `this.posts`
    // or empty
    this.route.url.subscribe(params => {
      if (params[0]) { // if not empty, select the active post as the chosen post
        this.selectedPost = params[0].path;
      } else { // otherwise, change selectedPost to empty, this will display list of all posts
        this.selectedPost = '';
      }
    });

    this.asset.getPosts().subscribe(
      data => {
        data.forEach(d => {
          // format datetime to a more readable format
          const datetime = new Date(Date.parse(d.updated_at));
          this.posts[d.url] = {
            title: d.title,
            body: this.markdownService.compile(d.body),
            updated_at: datetime.toLocaleString('en-US', {
              timeZone: 'America/New_York'
            }),
          };
        }, this);
      },
      error => {
        console.log('Get Posts Error', error);
      }
    );
  }
}
