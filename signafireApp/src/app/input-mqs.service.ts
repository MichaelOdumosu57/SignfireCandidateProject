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
	hightlighter:any;
	ctx:any;
	autoHighlightUrl:string ='/backend/autoHighlight';
	markerStart:Array<string>  = [];
	constructor(
		private http: HttpClient,
		private sgS: SigheaderService
	) { }
	repopulate(): void {
		this.stringWatcher.next(this.queryString);
	};
	textDimension(stringSelector:any,term:string,index:number):Observable<any>{
		console.log(stringSelector)
		return this.http.put<any>(this.autoHighlightUrl,
			{
				fullString:stringSelector.innerText,
				term
			}
			,httpOptions)
		.pipe(
			tap((shipment) => {
			    console.log(shipment)
			    this.ctx = this.canvasElement.getContext("2d");
			    this.ctx.font =  stringSelector.style.fontSize + " " + stringSelector.style.fontFamily;
			    this.textWidth = this.ctx.measureText(shipment.term || '').width;
			    this.markerStart[index] = this.ctx.measureText(stringSelector.innerText.substring(0,shipment.indent)).width.toString() + 'px';
			}),
			catchError(this.sgS.handleError('getMessages'))
		//unlike promises this goes through both in ts you get an error becuase the
		//API gives a string not that <T> type
		);



	  // console.log(stringSelector.innerText)
	  // different from innerHTML,because it includes any html tags including the marking div
	};
	marker(element:any,stringSelector:any):void{
		element.style.height = stringSelector.style.fontSize;
		this.textWidth = this.textWidth.toString()+'px'
		element.style.width = this.textWidth;
		element.style.backgroundColor = 'red';
		element.style.zIndex = -1
		console.log(this.textWidth)

	}

}
