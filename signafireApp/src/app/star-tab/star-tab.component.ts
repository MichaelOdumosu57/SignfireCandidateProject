import { Component, OnInit } from '@angular/core';
import { StarquantityService } from '../starquantity.service';

@Component({
  selector: 'app-star-tab',
  templateUrl: './star-tab.component.html',
  styleUrls: ['./star-tab.component.css']
})
export class StarTabComponent implements OnInit {
      
  constructor(
  	private sqS: StarquantityService
  ) { }
  starred:number = 3;
  getAmount(): void {
  	this.sqS.getMessagesAmount()
      .subscribe(starredAmount => {        
        this.starred = starredAmount;
        //if bug check here
      });   	
  }
  ngOnInit() {
  	this.getAmount();
  }

}
