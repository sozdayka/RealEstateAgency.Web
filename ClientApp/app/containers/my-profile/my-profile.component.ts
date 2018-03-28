import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html'
})
export class MyProfileComponent implements OnInit {

    public RoleStatus:boolean = true;

    constructor() { }

    ngOnInit() { }
}
