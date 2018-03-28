import { Component } from '@angular/core';

@Component({
    selector: 'header-menu',
    templateUrl: './header.component.html'
})

export class HeaderComponent {

    // login blogin login
    public LoginStatus:boolean = false;

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

    collapse: string = 'collapse';

    collapseNavbar(): void {
        if (this.collapse.length > 1) {
            this.collapse = '';
        } else {
            this.collapse = 'collapse';
        }
    }

    collapseMenu() {
        this.collapse = 'collapse';
    }
}
