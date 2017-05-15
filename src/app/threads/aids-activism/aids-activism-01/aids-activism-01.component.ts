import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-aids-activism-01',
    templateUrl: './aids-activism-01.component.html',
    styleUrls: [
        '../../threads-base.css',
        '../aids-activism-base.css',
        './aids-activism-01.component.css'
    ]
})
export class AidsActivism01Component implements OnInit {

    constructor ( private _router: Router){};

    ngOnInit() {
    }
    
    onNavForward(): void {
        this._router.navigate(['/aids-activism-02']);
    }
}


