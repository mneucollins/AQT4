import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './explorestories.component.html',
    styleUrls: ['./explorestories.component.css']
})

export class ExploreStoriesComponent{
    constructor ( private _router: Router){};

    onActivism(): void {
        this._router.navigate(['/aids_activism_01']);
    }

    onLatino(): void {
    }

    onAfricanAmerican(): void {
    }

    onCouples(): void {
    }

    onWomen(): void {
    }

    onHealing(): void {
    }

    onArts(): void {
    }

    onFamilies(): void {
    }

    onChildren(): void {
    }

    onCommunity(): void {
    }
}
