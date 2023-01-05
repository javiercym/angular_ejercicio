import { Component } from '@angular/core';
import { navbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuItems?:any[];

  constructor(private navbar:navbarService) { 
    this.menuItems=this.navbar.menu;
  }
}
