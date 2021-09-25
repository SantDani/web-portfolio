import {Tag} from './Tag';

export class WebPage {
  URL:string;
  image: any;
  title: string;
  tags: Tag[];

  constructor(url: string, title: string, tags:Tag[] = [] , image?: string) {
    this.URL = url;
    this.title = title
    this.tags = tags;

    if(image){
      console.log('log - hay imagen');
      this.image = image
    }else{
      this.image = './../../../assets/card/default.png'
    }

  }

}
