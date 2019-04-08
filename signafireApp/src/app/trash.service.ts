import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SigheaderService } from './sigheader.service';

@Injectable({
  providedIn: 'root'
})
export class TrashService {

  constructor(
  	private http: HttpClient,
  	private sgS: SigheaderService,
  ) { }
  messageUrl: string = '/backend/angularTrashRequest'
  getTrashImage(): Observable<string>{
    return this.http.get<string>(this.messageUrl)
      .pipe(
        tap(_ => console.log('fetched trash image')),
        catchError(this.sgS.handleError('getMessages'))
        //unlike promises this goes through both in ts you get an error becuase the 
        //API gives a string not that <T> type
      );      
  };  
}
