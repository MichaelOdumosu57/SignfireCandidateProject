import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweets';
import { StarquantityService } from '../starquantity.service';
import { ToggleService } from '../toggle.service';
import {   DomSanitizer   } from '@angular/platform-browser';
import { TrashService } from '../trash.service';



@Component({
  selector: 'app-tweet-component',
  templateUrl: './tweet-component.component.html',
  styleUrls: ['./tweet-component.component.css']
})
export class TweetComponentComponent implements OnInit {
  
  constructor(
    private sqS:StarquantityService,
    private tS: ToggleService,
    private trS: TrashService,    
    private DomSanitizer: DomSanitizer,
  ) { }
  tweetList: Tweet[];
  activeTweetList:  Tweet[];
  trashedTweetList: Tweet[];
  starMessage: string = '';
  image : string = ''; 
  getImage(): void {        
    this.trS.getTrashImage()
      .subscribe(trashString => {        
        this.image = trashString;
      });   
  }
  starred(bool:boolean): string {        
    if(   bool   ){
      this.starMessage = 'Starred!';
    }    
    else{
      this.starMessage = 'Star Message!';
    }
    return this.starMessage
  };
  trash(   garbage:Tweet   ): void {
    this.trS.deleteTweet(   garbage   )
      .subscribe(newTweetLists => {      
        console.log(newTweetLists)  
        this.tweetList = this.activeTweetList = newTweetLists.dbActive;
        this.trashedTweetList =newTweetLists.dbTrash;                 
      });     
  }
  populate():void {
    this.sqS.getMessages()    
      .subscribe(messageArray => {        
        this.tweetList = messageArray;
        //if bug check here
      });     
  };
  toggle(   target:Tweet   ):void {            
    this.tS.bool(   target   )
      .subscribe(result => {          
        target.starred = result;   
        this.sqS.getAmount();     
    });
  }
  ngOnInit() {
  	this.populate();
    // this.getImage()
  }

}
