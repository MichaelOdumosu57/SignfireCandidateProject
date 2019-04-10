import { Component, OnInit, ElementRef } from '@angular/core';
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
import { InputMQSService } from '../input-mqs.service';


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
    private iMQS:InputMQSService,
    private ElementRef:ElementRef
  ) { }
  test:Array<string> = ['a']; 
  tweetList: Tweet[]; // USE $ next time    
  starMessage: string = '';
  image : string = '';
  markerStart:string = '0px';
  increment(index:number):string{
    return ((20*index+1)+15).toString() + '%';
  }
  getImage(): void {        
    this.trS.getTrashImage()
      .subscribe(trashString => {        
        this.image = trashString;
      });   
  }
  trashToggle(question:Tweet[],command:Observable<string>): Tweet[][]{    
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
  //to hightlight the message according to the query string
  highlight(query:string,question:Tweet[],instruct:Observable<string>): Tweet[][]{      
      if(   instruct !== undefined   ){
          instruct.subscribe((value)=>{            
              if(   value === 'active'   ){              
                  console.log('trying to hightlight messages')
                  this.iMQS.messageElements = this.ElementRef.nativeElement.querySelectorAll(`.message`);
                  this.iMQS.hightlighter = this.ElementRef.nativeElement.querySelectorAll(`.message-highlight`);
                  this.iMQS.canvasElement = this.ElementRef.nativeElement.querySelector(`canvas`);  

                  for(let index in this.iMQS.messageElements){                      
                      if(   index === 'length'   ){
                          break;
                      }
                      this.iMQS.textDimension(this.iMQS.messageElements[index],query).subscribe()
                      // this.iMQS.marker(this.iMQS.hightlighter[index],this.iMQS.messageElements[index])          
                  }              
              }
              else if(   value === 'trash'   ){              
              }               
              return [this.tweetList];        
          })
      }
      
      return [this.tweetList]; 
  };  
  //
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
      // wait 300ms after each toggle messageList click
      debounceTime(100),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap(() => this.trashToggle(this.tweetList,this.trS.command$)),
    ).subscribe();
    // works but I get an error idk why
    // it only wants a Promise Observable array or iterable
    this.iMQS.stringWatcher.pipe(

      // switch to new search observable each time the term changes
      switchMap((item) => this.highlight(item,this.tweetList,this.trS.command$)),
    ).subscribe();    
  }

}
