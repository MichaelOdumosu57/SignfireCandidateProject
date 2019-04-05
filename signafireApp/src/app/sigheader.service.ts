import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigheaderService {
 
	constructor(
		private http: HttpClient
	) { }
	handleError (operation = 'operation', result?: '') {
	  return (error: any): Observable<any> => {
	 
	    // TODO: send the error to remote logging infrastructure
	    console.error(error); // log to console instead
	 
	    // TODO: better job of transforming error for user consumption
	    // console.error(`${operation} failed: ${error.message}`);
	 
	    // Let the app keep running by returning an empty result.
	    return of(result as '');
	  };
	}; 
	a:number = 21;
	logoUrl:string = '/backend/angularLogoRequest'
	getLogo(): Observable<string>{
	  return this.http.get<string>(this.logoUrl)
	    .pipe(
	      tap(_ => console.log('fetched logoString')),
	      catchError(this.handleError('getLogo'))
	      //unlike promises this goes through both in ts you get an error becuase the 
	      //API gives a string not that <T> type
	    );
	};


}
