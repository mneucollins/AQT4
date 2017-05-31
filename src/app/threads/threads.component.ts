import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: [
    '../explore/explore-base.css',
    './threads.component.css'
  ]
})
export class ThreadsComponent implements OnInit {

    constructor ( private _router: Router){};
    
    ngOnInit() {
    }

    onActivism(): void {
        this._router.navigate(['/aids-activism-01']);
    }

    onHealing(): void {
        this._router.navigate(['/healing-01']);
    }

    onWomen(): void {
        this._router.navigate(['/aids-women-01']);
    }

    onChildren(): void {
        this._router.navigate(['/aids-children-01']);
    }

    onLatino(): void {
    }

    onAfricanAmerican(): void {
    }

    onCouples(): void {
    }

    onArts(): void {
    }

    onFamilies(): void {
    }


    onCommunity(): void {
    }

}
