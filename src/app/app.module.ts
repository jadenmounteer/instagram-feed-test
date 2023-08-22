import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InstagramFeedComponent } from './instagram-feed/instagram-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    InstagramFeedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
