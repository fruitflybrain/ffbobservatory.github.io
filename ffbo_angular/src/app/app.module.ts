import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FFBONavBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { GetInvolvedMenuComponent } from './top-bar/get-involved-menu/get-involved-menu.component';
import { BrainmapvizMenuComponent } from './top-bar/brainmapviz-menu/brainmapviz-menu.component';
import { IgxBannerModule } from 'igniteui-angular';
import { AnnouncementBannerComponent } from './announcement-banner/announcement-banner.component';

// import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    FFBONavBarComponent,
    FooterComponent,
    GetInvolvedMenuComponent,
    BrainmapvizMenuComponent,
    AnnouncementBannerComponent,
    // PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    MatDialogModule,
    HttpClientModule,
    IgxBannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
