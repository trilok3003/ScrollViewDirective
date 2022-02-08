import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appScrollView]'
})
export class ScrollViewDirective {

  @Input()
  appScrollView;

  constructor(public elementRef: ElementRef) {
  
  }

}