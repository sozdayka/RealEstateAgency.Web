﻿import { Component } from '@angular/core';

@Component({
    selector: 'app-list-of-real-estate',
    templateUrl: './list-of-real-estate.component.html'
})
export class ListOfRealEstateComponent {

    public oneAtATime: boolean = true;
    public items = ['Item 1', 'Item 2', 'Item 3'];

    public status = {
        isFirstOpen: true,
        isFirstDisabled: false,
        open: false
    };

    public groups = [
        {
            title: 'Angular is neato gang!',
            content: 'ASP.NET Core is too :)'
        },
        {
            title: 'Another One!',
            content: 'Some content going here'
        }
    ];

    // Use "constructor"s only for dependency injection
    constructor() { }

    addItem(): void {
        this.items.push(`Items ${this.items.length + 1}`);
    }

}