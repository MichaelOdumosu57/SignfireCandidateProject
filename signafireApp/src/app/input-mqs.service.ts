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
	messageElements:any;
	canvasElement:any;
	textWidth:any;
	ctx:any;
	constructor(
		private trS: TrashService,
	) { }
	repopulate(): void {    
		this.stringWatcher.next(this.queryString);
	};
	textDimension(stringSelector:any):void{	  	  
	  this.ctx = this.canvasElement.getContext("2d");
	  this.ctx.font =  stringSelector.style.fontSize + " " + stringSelector.style.fontFamily ;  
	  this.textWidth = this.ctx.measureText(stringSelector.innerHTML).width;
	  stringSelector.style.backgroundSize = '200px 100px';
	  stringSelector.style.backgroundColor = 'green'
	  console.log(this.textWidth)	  
	};  	
}
