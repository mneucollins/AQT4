import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './aids_activism_04.component.html',
    styleUrls: [
        './aids_activism_base.css',
        './aids_activism_04.component.css',
    ]
})

export class AidsActivism04Component{
    constructor ( private _router: Router){};
    
    onNavForward(): void {
        this._router.navigate(['/aids_activism_05']);
    }
    onNavBack(): void {
        this._router.navigate(['/aids_activism_03']);
    }

}