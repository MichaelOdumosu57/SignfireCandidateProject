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
	getMessages(): Observable<Tweet[]>{
	  return this.http.get<Tweet[]>(this.messageUrl)
	    .pipe(
	      tap(_ => console.log('fetched messages String')),
	      catchError(this.sS.handleError('getLogo'))
	      //unlike promises this goes through both in ts you get an error becuase the 
	      //API gives a string not that <T> type
	    );
	};
}
