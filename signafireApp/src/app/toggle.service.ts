import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tweet } from './tweets';
import { SigheaderService } from './sigheader.service';
import { StarquantityService } from './starquantity.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  constructor(
  	private http: HttpClient,
  	private sgS: SigheaderService,
  	private sqS: StarquantityService
  ) { };
  boolUrl:string = '/backend/toggleStarred';
  bool(expect:Tweet): Observable<boolean>{
	  return this.http.post<boolean>(this.boolUrl,expect,httpOptions)
	    .pipe(
	      tap(_ => this.sqS.getMessagesAmount()),
	      catchError(this.sgS.handleError('getMessages'))
	    );	    
	};
}
