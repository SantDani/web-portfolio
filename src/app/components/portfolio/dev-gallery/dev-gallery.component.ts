import {Component, Input, OnInit} from '@angular/core';
import {WebPage} from '../models/WebPage';
import {Tag} from '../models/Tag';

@Component({
  selector: 'app-dev-gallery',
  templateUrl: './dev-gallery.component.html',
  styleUrls: ['./dev-gallery.component.sass']
})


export class DevGalleryComponent implements OnInit {

   webPages = [
    new WebPage('https://www.google.es', 'Rick And Morty', [
      new Tag('Angular', 'red'),
      new Tag('Material', 'blue'),
      new Tag('External API', 'dark')
    ], './../../../assets/card/rick_and_morty_title.png'),
    new WebPage('https://react-firebase-47bf4.web.app/', 'React CRUD - Products', [
      new Tag('ReactJS', 'dark'),
      new Tag('Firebase', 'yellow')
    ], './../../../assets/card/react.png'),
    new WebPage('www.google.es', 'iNurse', [
      new Tag('Inoic', 'blue'),
      new Tag('Firebase', 'yellow')
    ], './../../../assets/card/ionic_logo.png'),
    new WebPage('https://nodejs-mid.herokuapp.com/', 'NodeJS CRUD - Films', [
      new Tag('NodeJS', 'green'),
      new Tag('MongoDB', 'green')
    ], './../../../assets/card/nodejs.svg')
  ] ;

  @Input()
  isDevGallery: boolean;
  testWebPages: WebPage[];

  constructor() {
    this.testWebPages = [];
    this.isDevGallery = false;
  }


  ngOnInit(): void {

    for (let i = 0; i < 20; i++){
      const randomIndex = Math.floor(Math.random() * (this.webPages.length - 1));
      console.log('log - randomIndex', randomIndex);
      this.testWebPages.push(this.webPages[randomIndex]);
    }

    console.log('log - array test', this.testWebPages);
  }

}
