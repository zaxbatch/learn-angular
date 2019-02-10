import { Component, OnInit } from '@angular/core';
import { MENU } from '../menu-items';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	  menus = MENU;
	
  constructor() { }

  ngOnInit() {
  }

}
