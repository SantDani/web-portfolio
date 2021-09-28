import { Component, OnInit } from '@angular/core';
import {WebPage} from './models/WebPage';
import {Tag} from './models/Tag';
import {ResponsiveService} from '../../services/responsive.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  webPages: WebPage[];
  items: number[];

  isResponsive: boolean;
  constructor(private _responsive: ResponsiveService) {
    this.webPages = [];
    this.isResponsive = true;
    this.items = [];


    for (let i = 0; i < 4; i++){
      this.items.push(i);
    }

    this.webPages.push(new WebPage('https://react-firebase-47bf4.web.app/', 'React CRUD - Products', [
      new Tag('ReactJS', 'dark'),
      new Tag('Firebase', 'yellow'),
      new Tag('Bootstrap', 'violet')
      ], './../../../assets/card/react.png'));

    this.webPages.push(new WebPage('https://rick-morty-srod.web.app/', 'Rick And Morty', [
      new Tag('Angular', 'red'),
      new Tag('Material', 'blue'),
      new Tag('External API', 'dark')
    ], './../../../assets/card/angular.png'));

    /*this.webPages.push(new WebPage('www.google.es', 'iNurse', [
      new Tag('Inoic', 'blue'),
      new Tag('Firebase', 'yellow')
    ], './../../../assets/card/ionic_logo.png'));*/

    this.webPages.push(new WebPage('https://nodejs-mid.herokuapp.com/', 'NodeJS CRUD - Films', [
      new Tag('NodeJS', 'green'),
      new Tag('MongoDB', 'green'),
      new Tag('Heroku', 'violet'),
      new Tag('Bootstrap', 'violet')
    ], './../../../assets/card/nodejs.svg'));
  /*  this.webPages.push(new WebPage('www.google.es', 'Maps', [
      new Tag('Angular', 'red'),
      new Tag('External API', 'dark')
    ]));*/

  }

  ngOnInit(): void {
    // console.log('log - data', this.webPages);

    this.isResponsive = this._responsive.isMobile();
  }

}
