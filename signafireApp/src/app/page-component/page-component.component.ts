import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweets';

@Component({
  selector: 'app-page-component',
  templateUrl: './page-component.component.html',
  styleUrls: ['./page-component.component.css']
})

export class PageComponentComponent implements OnInit {
  tweetList: Tweet = [1,1,1,1,1];  
  items: Tweet={
		message:'',
		name:'',
		date:'',
		starred:false
	};
  add(item:Tweet):void {  	
  	this.tweetList.push(item)  	
  };

  constructor() { }

  ngOnInit() {
  	console.log(this)
  	this.add(this.items)
  }

}
