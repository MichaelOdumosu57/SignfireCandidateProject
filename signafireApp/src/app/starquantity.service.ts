import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tweet } from './tweets';
import { SigheaderService } from './sigheader.service';

@Injectable({
  providedIn: 'root'
})
export class StarquantityService {

	constructor(
		private http: HttpClient,
		private sS: SigheaderService
	) { }  
	messageUrl: string = '/backend/messages';
	messagesAmountUrl: string = '/backend/starredAmount';
	getMessages(): Observable<Tweet[]>{
	  return this.http.get<Tweet[]>(this.messageUrl)
	    .pipe(
	      tap(_ => console.log('fetched messages db')),
	      catchError(this.sS.handleError('getMessages'))
	      //unlike promises this goes through both in ts you get an error becuase the 
	      //API gives a string not that <T> type
	    );	    
	};
	getMessagesAmount(): Observable<number>{
	  return this.http.get<number>(this.messagesAmountUrl)
	    .pipe(
	      tap(_ => console.log('fetched messages amount')),
	      catchError(this.sS.handleError('getMessagesAmount'))
	      //unlike promises this goes through both in ts you get an error becuase the 
	      //API gives a string not that <T> type
	    );	    
	};	
}
