import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './viewtour.component.html',
    styleUrls: [
        './explore-base.css',
        './viewtour.component.css'
    ]
})

export class ViewTourComponent{
    constructor ( private _router: Router){};
}