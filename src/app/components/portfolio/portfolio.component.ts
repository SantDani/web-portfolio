import { Component, OnInit } from '@angular/core';
import {WebPage} from './WebPage';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  webPages: WebPage[];
  constructor() {
    this.webPages = [];

    this.webPages.push(new WebPage('www.google.es', 'Rick And Morty'));
    this.webPages.push(new WebPage('www.google.es', 'Rick And Morty'));
    this.webPages.push(new WebPage('www.google.es', 'Rick And Morty'));
    this.webPages.push(new WebPage('www.google.es', 'Rick And Morty'));
    this.webPages.push(new WebPage('www.google.es', 'Rick And Morty'));
    this.webPages.push(new WebPage('www.google.es', 'Rick And Morty'));
    this.webPages.push(new WebPage('www.google.es', 'Rick And Morty'));
  }

  ngOnInit(): void {
  }

}
