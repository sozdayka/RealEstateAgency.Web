import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html'
})
export class MyProfileComponent implements OnInit {

    public RoleStatus:boolean = true; //true == admin | false == user
    public clickMore:boolean = false; //status in array | true/false

    constructor() { }

    ngOnInit() { }
}
