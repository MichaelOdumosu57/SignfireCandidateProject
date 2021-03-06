import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageComponentComponent } from './page-component/page-component.component';
import { TweetComponentComponent } from './tweet-component/tweet-component.component';
import { StarTabComponent } from './star-tab/star-tab.component';
import { SigHeaderComponent } from './sig-header/sig-header.component';

import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TrashMessagesComponent } from './trash-messages/trash-messages.component';
import { InputMQComponent } from './input-mq/input-mq.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponentComponent,
    TweetComponentComponent,
    StarTabComponent,
    SigHeaderComponent,
    TrashMessagesComponent,
    InputMQComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
