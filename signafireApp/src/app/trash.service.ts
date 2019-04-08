import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SigheaderService } from './sigheader.service';
import { Tweet } from './tweets';
import { DbTweet } from './dbTweet';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TrashService {

  constructor(
  	private http: HttpClient,
  	private sgS: SigheaderService,
  ) { }
  messageUrl: string = '/backend/angularTrashRequest';
  deleteUrl: string = '/backend/trashTweet';
  activeTweetList:  Tweet[];
  trashedTweetList: Tweet[];
  chosenTweetList:  Tweet[];
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
  }
}
