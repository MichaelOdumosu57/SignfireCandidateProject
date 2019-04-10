import { Injectable } from '@angular/core';
import { Observable, of, Subject,from } from 'rxjs';
import {
  catchError, map, tap,
  debounceTime,
  distinctUntilChanged, switchMap }
from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SigheaderService } from './sigheader.service';
import { InputMQSService } from './input-mqs.service';
import { Tweet } from './tweets';
import { DbTweet } from './dbTweet';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const myObserver = function(value:string): void{
  console.log(value)
};
const myObservable = from(['active']);
@Injectable({
  providedIn: 'root'
})
export class TrashService {
  trashWatcher = new Subject<string>();
  constructor(
  	private http: HttpClient,
  	private sgS: SigheaderService,
  	private iMQS:InputMQSService
  ) { }
  messageUrl: string = '/backend/angularTrashRequest';
  deleteUrl: string = '/backend/trashTweet';
  activeTweetList:  Tweet[];
  trashedTweetList: Tweet[];
  chosenTweetList:  Tweet[];
  command$:Observable<string> = from(['active']);
  getTrashImage(): Observable<string>{
    return this.http.get<string>(this.messageUrl)
      .pipe(
        tap(_ => console.log('fetched trash image')),
        catchError(this.sgS.handleError('getMessages'))
        //unlike promises this goes through both in ts you get an error becuase the
        //API gives a string not that <T> type
      );
  };
  deleteTweet(garbage:Tweet): Observable<DbTweet>{
     return this.http.put<DbTweet>(this.deleteUrl, garbage, httpOptions)
      .pipe(
        tap((newTweetLists) => {
        	console.log('deleted tweet')
	        this.activeTweetList = newTweetLists.dbActive;
	        this.trashedTweetList =newTweetLists.dbTrash;
        }),
        catchError(this.sgS.handleError('getMessages'))
        //unlike promises this goes through both in ts you get an error becuase the
        //API gives a string not that <T> type
      );
  };
  generateTweetList(): void{
    this.chosenTweetList = this.activeTweetList;
    console.log(this.iMQS)
    for(   let index in this.chosenTweetList   ){
        console.log(index)
        this.iMQS.markerStart.push('0px')
    }
  };
  repopulate(term: string): void {
    this.trashWatcher.next(term);
  }
  toggleTweetList(command:string): void{
    // console.log(command)
    if(   command === 'active'   ){
        this.chosenTweetList = this.activeTweetList;
    }
    else if(   command === 'trash'   ){
        this.chosenTweetList = this.trashedTweetList;
    }
    this.command$ = from([command])
    this.repopulate(command)
  }
}
