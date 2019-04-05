import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweets';
import { StarquantityService } from '../starquantity.service';

@Component({
  selector: 'app-tweet-component',
  templateUrl: './tweet-component.component.html',
  styleUrls: ['./tweet-component.component.css']
})
export class TweetComponentComponent implements OnInit {
  
  constructor(
    private sqS:StarquantityService 
  ) { }
  tweetList: Tweet[];
  dist:  number = 10;
  starMessage: string = 'Star Message';
  add():void {
    this.sqS.getMessages()    
      .subscribe(messageArray => {
        console.log(messageArray.db)
        this.tweetList = messageArray.db;
      });     
  };
  ngOnInit() {
  	this.add()
  }

}
