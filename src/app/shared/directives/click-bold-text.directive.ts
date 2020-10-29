import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickBoldText]'
})
export class ClickBoldTextDirective {
  @Input('appClickBoldText') fontSize: string;

  constructor(private el: ElementRef, private render: Renderer2) {
  }

  @HostListener('click', ['$event']) elementClick(e) {
    e.preventDefault();
    this.render.addClass(this.el.nativeElement, 'app-text--bold');
    this.render.setStyle(this.el.nativeElement, 'font-size', this.fontSize);
  }

}
