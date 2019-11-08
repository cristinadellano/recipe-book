import { Component } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
})

export class NavComponent {
    collapsed: boolean = true;

    collapsible() {
        this.collapsed = !this.collapsed;
    }
}