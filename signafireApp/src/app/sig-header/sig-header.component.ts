import { Component, OnInit,Input  } from '@angular/core';
import { SigheaderService } from '../sigheader.service';
import {   DomSanitizer   } from '@angular/platform-browser';
// a service


@Component({
  selector: 'app-sig-header',
  templateUrl: './sig-header.component.html',
  styleUrls: ['./sig-header.component.css']
})
export class SigHeaderComponent implements OnInit {
	

	constructor(
		private sS: SigheaderService,
		private DomSanitizer: DomSanitizer
	) { }
	image:string = '';	
	getImage(): void {				
		this.sS.getLogo()
			.subscribe(logoString => {
				console.log(logoString)
				this.image = logoString;
			});		
	}
	ngOnInit() {
		this.getImage()
	}

}
