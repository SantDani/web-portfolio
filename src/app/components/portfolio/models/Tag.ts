export class Tag {
  color: string;
  title: string

  constructor(title: string, color: string = 'white' ) {
    this.title = title;
    this.color = color;
  }
}
