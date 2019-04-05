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
  items: Tweet={
		message:'',
		name:'',
		date:'',
		starred:false
	};
  dist:  number = 10;
  starMessage: string = 'Star Message';
  add(item:Tweet):void {
    this.tweetList.push(   this.sqS.getMessages() )
  };

  ngOnInit() {
  	this.add(this.items)
  }

}
