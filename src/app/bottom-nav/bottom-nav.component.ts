import { Component, OnInit } from '@angular/core';
import { MENU } from '../menu-items';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent implements OnInit {
	menus = MENU;
  constructor() { }

  ngOnInit() {
  }

}
