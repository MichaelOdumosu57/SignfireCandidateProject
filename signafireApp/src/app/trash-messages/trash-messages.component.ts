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

	  	if(   this.display === 'Show Trashed Messages'   ){
	  		this.display = 'Show Untrashed Messages';
	  		this.trS.toggleTweetList('trash')	  		
	  	}
	  	else{
	  		this.display = 'Show Trashed Messages';
	  		this.trS.toggleTweetList('active')
	  	}

  	
  }
  ngOnInit() {
  }

}
