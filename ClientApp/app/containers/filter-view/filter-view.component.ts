import { Component } from '@angular/core';

@Component({
    selector: 'app-filter-view',
    templateUrl: './filter-view.component.html'
})
export class FilterViewComponent {
public houses: {name: string,address: string, img: string, shortparam: string, price: string} [] = [
        {
            name: 'Beach House',
            address: '1348 209th St, Flushing',
            img: "images/demo/slider/1.jpg",
            shortparam: "Bads: 4 Baths: 4 Sqft: 2,500",
            price: "800,000"
        },


        {
            name: 'Luxury Panoramic Loft',
            address: '1348 209th St, Flushing',
            img: "images/demo/slider/2.jpg",
            shortparam: "Bads: 2 Baths: 1 Sqft: 1,500",
            price: "787,000"
        }
    ];

    // Use "constructor"s only for dependency injection
    constructor() { }

    

}