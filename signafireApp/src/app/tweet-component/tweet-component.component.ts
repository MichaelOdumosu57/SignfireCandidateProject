import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweets';

@Component({
  selector: 'app-tweet-component',
  templateUrl: './tweet-component.component.html',
  styleUrls: ['./tweet-component.component.css']
})
export class TweetComponentComponent implements OnInit {
  
  tweetList: Tweet = [1,2,3];  
  items: Tweet={
		message:'',
		name:'',
		date:'',
		starred:false
	};
  dist:  10;
  add(item:Tweet):void {  	
  	
  };

  constructor() { }

  ngOnInit() {
  	console.log(this)
  	this.add(this.items)
  }

}
