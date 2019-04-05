import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-tab',
  templateUrl: './star-tab.component.html',
  styleUrls: ['./star-tab.component.css']
})
export class StarTabComponent implements OnInit {
      
  constructor() { }
  starred:number = 0;
  ngOnInit() {
  }

}
