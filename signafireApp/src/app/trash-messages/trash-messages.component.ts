import { Component, OnInit } from '@angular/core';
import { TrashService } from '../trash.service';

@Component({
  selector: 'app-trash-messages',
  templateUrl: './trash-messages.component.html',
  styleUrls: ['./trash-messages.component.css']
})
export class TrashMessagesComponent implements OnInit {

  constructor(
  	private trS: TrashService
  ) { }

  display:string = 'Show Trashed Messages';
  dbChange(flag:number):void{
  	console.log(flag)
  	if(   flag !== undefined){
  		this.trS.generateTweetList();
  	}
  	else{
	  	if(   this.display === 'Show Trashed Messages'   ){
	  		this.display = 'Show Untrashed Messages';
	  	}
	  	else{
	  		this.display = 'Show Trashed Messages';
	  	}
  	}
  }
  ngOnInit() {
  	// this.dbChange(1);
  }

}
