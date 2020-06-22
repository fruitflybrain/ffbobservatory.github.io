import { HttpClientModule } from '@angular/common/http';
import { NgxMdModule } from 'ngx-md';
import { NgModule } from '@angular/core';
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
    NgxMdModule,
    HttpClientModule
  ]
})
export class PostsModule { }
