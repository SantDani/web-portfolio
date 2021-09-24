import { Component, OnInit } from '@angular/core';
import {ResponsiveService} from '../../services/responsive.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  isMobile: boolean = true;
  constructor(private _responsiveService: ResponsiveService) { }

  ngOnInit(): void {
    this.isMobile = this._responsiveService.isMobile();
  }

  toggleMenu() {
    console.log('log - menu toggle');
  }
}
