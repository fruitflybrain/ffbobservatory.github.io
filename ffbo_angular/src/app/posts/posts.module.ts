import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    MarkdownModule.forChild()
  ]
})
export class PostsModule { }
