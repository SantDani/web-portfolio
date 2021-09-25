import {Tag} from './Tag';

export class WebPage {
  URL:string;
  image: any;
  title: string;
  tags: Tag[];

  constructor(url: string, title: string, tags:Tag[] = []) {
    this.URL = url;
    this.title = title
    this.tags = tags;
  }

}
