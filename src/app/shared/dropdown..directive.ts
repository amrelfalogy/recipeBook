import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // Binds the class 'open' to the host element when isOpen is true
  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef) {}

  // Listens for click events on the host element

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
    console.log('Dropdown toggled:', this.isOpen);
  }
}
