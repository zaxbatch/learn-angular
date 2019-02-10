import { Component, OnInit } from '@angular/core';
import { MENU } from '../menu-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
	title = 'Learn Angular';
	  menus = MENU;
  constructor() { }

  ngOnInit() {
  }

}
