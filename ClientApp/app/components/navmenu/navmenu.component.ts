import { Component } from '@angular/core';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})

export class NavMenuComponent {
    public RoleStatus:boolean = true;
    
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
