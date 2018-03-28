import { Component, OnInit, Inject } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    public houses: {name: string,address: string, img: string, shortparam: string, price: string} [] = [
        {
            name: 'Beach House',
            address: '1348 209th St, Flushing',
            img: "images/demo/slider/1.jpg",
            shortparam: "<li>Bads: 4</li> <li>Baths: 4</li>   <li>Sqft: 2,500</li>",
            price: "800,000"
        },


        {
            name: 'Luxury Panoramic Loft',
            address: '1348 209th St, Flushing',
            img: "images/demo/slider/2.jpg",
            shortparam: "<li>Bads: 2</li> <li>Baths: 1</li>   <li>Sqft: 1,500</li>",
            price: "787,000"
        }
    ];


    public categorys: {name: string, img: string, link: string} [] = [
        {
            name: 'Частные Дома',
            img: "images/content/pa1.jpg",
            link: "filter?category=1"
        },
        {
            name: 'Офисы',
            img: "images/content/pa2.jpg",
            link: "filter?category=2"
        },
        {
            name: 'Квартиры в новострое',
            img: "images/content/pa3.jpg",
            link: "filter?category=3"
        },
        {
            name: 'Вторичное жилье',
            img: "images/content/pa3.jpg",
            link: "filter?category=4"
        },
        {
            name: 'Пенхаусы',
            img: "images/content/pa5.jpg",
            link: "filter?category=5"
        },
        {
            name: 'Участки',
            img: "images/content/pa6.jpg",
            link: "filter?category=6"
        },
        {
            name: 'Гаражи',
            img: "images/content/pa7.jpg",
            link: "filter?category=7"
        },
        {
            name: 'Другое',
            img: "images/content/pa8.jpg",
            link: "filter?category=8"
        }
    ];
    

    ngOnInit() { }

    
}
