import { Component, OnInit,Input  } from '@angular/core';
import { SigheaderService } from '../sigheader.service';

@Component({
  selector: 'app-sig-header',
  templateUrl: './sig-header.component.html',
  styleUrls: ['./sig-header.component.css']
})
export class SigHeaderComponent implements OnInit {
	

	constructor(private sigheaderS: SigheaderService) { }
	image:number = 2	
	getImage(): void {
		console.log(this.sigheaderS)
		this.image = this.sigheaderS.getLogo()
	}
	ngOnInit() {
		this.getImage()
	}

}
