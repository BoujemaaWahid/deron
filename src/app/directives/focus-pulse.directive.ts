import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocusPulse]'
})
export class FocusPulseDirective {

  @HostBinding('class.pulsed')isFocused: boolean;
  constructor() { }
  @HostListener('focus', ['$event']) onFocus(e){
    this.isFocused = true;
  }
  @HostListener('blur', ['$event']) onBlur(e){
    this.isFocused = false;
  }

}
