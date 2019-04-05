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
  // starred:  number = this.sqS.getAmtForCmpt();
  ngOnInit() {  	
    this.sqS.getAmount();    
  }

}
