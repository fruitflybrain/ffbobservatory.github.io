import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    MarkdownModule.forChild(),
    MatSidenavModule,
    MatListModule,
    MatChipsModule
  ]
})
export class PostsModule { }
