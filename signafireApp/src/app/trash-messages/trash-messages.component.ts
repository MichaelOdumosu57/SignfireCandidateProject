import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trash-messages',
  templateUrl: './trash-messages.component.html',
  styleUrls: ['./trash-messages.component.css']
})
export class TrashMessagesComponent implements OnInit {

  constructor() { }

  display:string = 'Show Trashed Messages';
  dbChange():void{
  	if(   this.display === 'Show Trashed Messages'   ){
  		this.display = 'Show Untrashed Messages';
  	}
  	else{
  		this.display = 'Show Trashed Messages';
  	}
  }
  ngOnInit() {
  }

}
