import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
   @HostBinding('class.open') isDroped: Boolean = false;

    @HostListener('click') toggleOpen() {
        this.isDroped = !this.isDroped;

    }
}