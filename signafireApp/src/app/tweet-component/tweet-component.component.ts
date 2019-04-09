import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweets';
import { StarquantityService } from '../starquantity.service';
import { ToggleService } from '../toggle.service';
import {   DomSanitizer   } from '@angular/platform-browser';
import { TrashService } from '../trash.service';
import { Observable, of, Subject } from 'rxjs';
import { 
  catchError, map, tap,
  debounceTime, 
  distinctUntilChanged, switchMap } 
from 'rxjs/operators';




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
  tweetList: Tweet[]; // USE $ next time    
  starMessage: string = '';
  image : string = '';
  gun:Array<string> = ['a'] 
  getImage(): void {        
    this.trS.getTrashImage()
      .subscribe(trashString => {        
        this.image = trashString;
      });   
  }
  trashToggle(question:Tweet[],command:Observable<string>): Tweet[]{
    console.log(this.gun)
    if(   command !== undefined   ){
          command.subscribe((value)=>{
            console.log(value)
            if(value === 'active'){
              this.tweetList = this.trS.chosenTweetList =  this.trS.activeTweetList
            }
            else if(value === 'trash'){
              this.tweetList = this.trS.chosenTweetList =  this.trS.trashedTweetList
              console.log(this.trS.trashedTweetList)
            }   
            console.log(this.tweetList)
            return [this.tweetList];        
          })
    }
    
    return [this.tweetList]; 
  };
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
      .subscribe(() => {                        
        this.trashToggle(this.tweetList,this.trS.command$)
      });            
  }
  populate():void {
    this.sqS.getMessages()    
      .subscribe(messageArray => {        
        this.trS.activeTweetList = messageArray;
        this.trS.generateTweetList();
        this.tweetList = this.trS.chosenTweetList
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
    this.trS.trashWatcher.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(100),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap(() => this.trashToggle(this.tweetList,this.trS.command$)),
    ).subscribe();
    // works but I get an error idk why
    // it only wants a Promise Observable array or iterable
  }

}
