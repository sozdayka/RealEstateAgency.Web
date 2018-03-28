import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sign-up-to-view',
    templateUrl: './sign-up-to-view.component.html'
})
export class SignUpToViewComponent implements OnInit {

    public LoginStatus:boolean = false;
    public showModalUnsver:boolean = false;
    public showModalUnsverStatus:boolean = false;

    constructor() { }

    ngOnInit() { }
}
