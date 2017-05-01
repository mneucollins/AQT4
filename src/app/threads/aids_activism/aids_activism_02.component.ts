import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './aids_activism_02.component.html',
    styleUrls: [
        './aids_activism_base.css',
        './aids_activism_02.component.css',
    ]
})

export class AidsActivism02Component{
    constructor ( private _router: Router){};
    
    onNavForward(): void {
        this._router.navigate(['/aids_activism_03']);
    }
    onNavBack(): void {
        this._router.navigate(['/aids_activism_01']);
    }

}