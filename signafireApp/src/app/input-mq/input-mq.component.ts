import { Component, OnInit } from '@angular/core';
import { InputMQSService } from '../input-mqs.service';


@Component({
  selector: 'app-input-mq',
  templateUrl: './input-mq.component.html',
  styleUrls: ['./input-mq.component.css']
})
export class InputMQComponent implements OnInit {

  constructor(
  	private iMQS:InputMQSService,
  ) { }
  register(term: string): void {    
 	  this.iMQS.queryString = term; 
  }  
  highlight():void{
  	  this.iMQS.repopulate()	
  }

  
  ngOnInit() {    
  }

}
