import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-healing-01',
    templateUrl: './healing-01.component.html',
    styleUrls: [
        '../../threads-base.css',
        '../healing-base.css',
        './healing-01.component.css'
    ]
})
export class Healing01Component implements OnInit {

    constructor ( private _router: Router){};

    ngOnInit() {
    }
    onNavForward(): void {
        this._router.navigate(['/healing-02']);
    }
}
