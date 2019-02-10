import { Component,  OnInit } from '@angular/core';
import { MENU } from './menu-items';


@Component({
  selector: 'app-body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learn Angular';
	menus = MENU;

}
