import {Directive, ElementRef, HostListener, Input, Renderer2, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appHoverCard]'
})
export class HoverCardDirective implements OnChanges{



  @Input()
  defaultElevation: string ;

  @Input()
  raisedElevation: string;

  constructor(
    private element: ElementRef,
    private render: Renderer2
  ) {
    this.defaultElevation = '2';
    this.raisedElevation =  '8';

    this.setElevation(this.defaultElevation);
  }

  ngOnChanges( changes: SimpleChanges): void {
    // console.log('log - onChanges');
    this.setElevation(this.defaultElevation);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void{

    this.setElevation(this.raisedElevation);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void{
    this.setElevation(this.defaultElevation);
  }


  private setElevation(valElevation: string): void {
    // console.log('log - onMouse', valElevation);
    const elevationPrefix = 'mat-elevation-z';
    // remove all elevation classes

    const classesToRemove = Array.from(( this.element.nativeElement as HTMLElement).classList)
      .filter( element => element.startsWith(elevationPrefix));

    classesToRemove.forEach(element => {
      this.render.removeClass(this.element.nativeElement, element);
    });

    // add the elevation

    const newClass = `${elevationPrefix}${valElevation}`;
    this.render.addClass(this.element.nativeElement, newClass);

  }
}
