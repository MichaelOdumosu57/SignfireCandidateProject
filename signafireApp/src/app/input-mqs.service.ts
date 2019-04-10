import { Injectable } from '@angular/core';
import { Observable, of, Subject,from } from 'rxjs';
import { 
  catchError, map, tap,
  debounceTime, 
  distinctUntilChanged, switchMap } 
from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SigheaderService } from './sigheader.service';
import { TrashService } from './trash.service';
import { Tweet } from './tweets';
import { DbTweet } from './dbTweet';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class InputMQSService {
	stringWatcher = new Subject<string>();
	queryString:string = '';
	constructor(
		private trS: TrashService,
	) { }
	repopulate(): void {    
		this.stringWatcher.next(this.queryString);
	}
}
