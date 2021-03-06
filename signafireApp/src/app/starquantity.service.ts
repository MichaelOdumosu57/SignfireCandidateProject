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
		private sgS: SigheaderService
	) { }  
	messageUrl: string = '/backend/messages';
	messagesAmountUrl: string = '/backend/starredAmount';
	starred:number = 2;
	getMessages(): Observable<Tweet[]>{
	  return this.http.get<Tweet[]>(this.messageUrl)
	    .pipe(
	      tap(_ => console.log('fetched messages db')),
	      catchError(this.sgS.handleError('getMessages'))
	      //unlike promises this goes through both in ts you get an error becuase the 
	      //API gives a string not that <T> type
	    );	    
	};
	getAmount(): void {
		this.getMessagesAmount()
		  .subscribe(starredAmount => {                
		  	this.starred = starredAmount		  		
		  });   	
	};	
	getAmtForCmpt():number{
		return this.starred;
	}
	getMessagesAmount(): Observable<number>{
	  return this.http.get<number>(this.messagesAmountUrl)
	    .pipe(
	      tap(_=>null ),
	      catchError(this.sgS.handleError('getMessagesAmount'))
	      //unlike promises this goes through both in ts you get an error becuase the 
	      //API gives a string not that <T> type
	    );	    
	};	
}
