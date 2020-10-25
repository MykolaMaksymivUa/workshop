import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;

  @HostBinding('style.borderColor') borderColor: string;
  @HostBinding('class.app-border--dotted') elementBorderClass = false;

  readonly DEFAULT_HIGHLIGH_COLOR: string = 'red';

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter', ['$event']) enter(event: Event) {
    this.highlight();
  }

  @HostListener('mouseleave', ['$event']) leave(event: Event) {
    this.unhighlight();
  }

  private highlight() {
    this.elementBorderClass = true;
    this.borderColor = this.highlightColor || this.DEFAULT_HIGHLIGH_COLOR;
  }

  private unhighlight() {
    this.elementBorderClass = false;
  }
}
