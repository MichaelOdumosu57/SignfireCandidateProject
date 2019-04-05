import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweets';
import { StarquantityService } from '../starquantity.service';
import { ToggleService } from '../toggle.service';


@Component({
  selector: 'app-tweet-component',
  templateUrl: './tweet-component.component.html',
  styleUrls: ['./tweet-component.component.css']
})
export class TweetComponentComponent implements OnInit {
  
  constructor(
    private sqS:StarquantityService,
    private tS: ToggleService,    
  ) { }
  tweetList: Tweet[];  
  starMessage: string = '';
  starred(bool:boolean): string {        
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
        this.tweetList = messageArray;
        //if bug check here
      });     
  };
  toggle(target:Tweet):void {            
    this.tS.bool(   target   )
      .subscribe(result => {          
        target.starred = result;   
        this.sqS.getAmount();     
    });
  }
  ngOnInit() {
  	this.populate()
  }

}
