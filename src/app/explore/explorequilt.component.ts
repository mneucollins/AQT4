import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './explorequilt.component.html',
    styleUrls: [
        './explore-base.css',
        './explorequilt.component.css'
    ]
})

export class ExploreQuiltComponent{
    constructor ( private _router: Router){};

    onRandom(): void {
        this._router.navigate(['/view_random']);
    }

    takeTour(): void {
        this._router.navigate(['/take_a_tour']);
    }

    findName(): void {
        this._router.navigate(['/find_a_name']);
    }
}
