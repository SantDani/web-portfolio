import { Component, OnInit } from '@angular/core';
import {WebPage} from './models/WebPage';
import {Tag} from './models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  webPages: WebPage[];
  constructor() {
    this.webPages = [];

    this.webPages.push(new WebPage('www.google.es', 'Rick And Morty', [
      new Tag('Angular', 'red'),
      new Tag('Material', 'blue'),
      new Tag('External API', 'dark')
    ]));

    this.webPages.push(new WebPage('www.google.es', 'React CRUD - Products', [
      new Tag('ReactJS', 'dark'),
      new Tag('Firebase', 'yellow')
      ]));
    this.webPages.push(new WebPage('www.google.es', 'iNurse', [
      new Tag('Inoic', 'blue'),
      new Tag('Firebase', 'yellow')
    ]));
    this.webPages.push(new WebPage('www.google.es', 'NodeJS CRUD - Films', [
      new Tag('NodeJS', 'green'),
      new Tag('MongoDB', 'green')
    ]));
    this.webPages.push(new WebPage('www.google.es', 'Maps', [
      new Tag('Angular', 'red'),
      new Tag('External API', 'dark')
    ]));

  }

  ngOnInit(): void {

    console.log('log - data', this.webPages);
  }

}
