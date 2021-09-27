import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverCard]'
})
export class HoverCardDirective {



  @Input()
  defaultElevation = 2;

  @Input()
  raisedElevation = 8;

  constructor(
    private element: ElementRef,
    private render: Renderer2
  ) {
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


  private setElevation(valElevation: number): void {
    console.log('log - onMouse', valElevation);
    const elevationPrefix = 'mat-elevation-z';
    // remove all elevation classes

    const classesToRemove = Array.from(( <HTMLElement> this.element.nativeElement).classList)
      .filter( element => element.startsWith(elevationPrefix));

    classesToRemove.forEach(element => {
      this.render.removeClass(this.element.nativeElement, element);
    });

    // add the elevation

    const newClass = `${elevationPrefix}${valElevation}`;
    this.render.addClass(this.element.nativeElement, newClass);

  }
}
