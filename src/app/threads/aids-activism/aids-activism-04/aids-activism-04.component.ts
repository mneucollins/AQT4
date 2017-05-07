import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-aids-activism-04',
    templateUrl: './aids-activism-04.component.html',
    styleUrls: [
        '../aids-activism-base.css',
        './aids-activism-04.component.css'
    ]
})

export class AidsActivism04Component implements OnInit {

    constructor ( private _router: Router){};

    ngOnInit() {
    }
    
    onNavForward(): void {
        this._router.navigate(['/aids-activism-05']);
    }
    onNavBack(): void {
        this._router.navigate(['/aids-activism-03']);
    }

}
