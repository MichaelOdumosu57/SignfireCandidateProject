import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageComponentComponent } from './page-component/page-component.component';
import { TweetComponentComponent } from './tweet-component/tweet-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponentComponent,
    TweetComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
