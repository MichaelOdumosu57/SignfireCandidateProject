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
  starMessage: string = '';
  starred(bool:boolean): string { 
    console.log(bool)   
    if(   bool   ){
      this.starMessage = 'Starred!';
    }    
    else{
      this.starMessage = 'Star Message!';
    }
    return this.starMessage
  };
  populate():void {
    this.sqS.getMessages()    
      .subscribe(messageArray => {        
        this.tweetList = messageArray.db;
        //if bug check here
      });     
  };
  ngOnInit() {
  	this.populate()
  }

}
