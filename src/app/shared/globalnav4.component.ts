import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'globalnav4',
    templateUrl: './globalnav4.component.html',
    styleUrls: [
        './globalnav4.component.css'
        ]
})

export class GlobalNav4Component {
    //global routing is in the app.module
    constructor ( private _router: Router, private _location: Location ){};
    
    onHome(): void {
        this._router.navigate(['/home']);
    }
    
    onBack(): void {
        this._location.back();
    }
    onThread(): void {
        this._router.navigate(['/thread']);
    }

    onTour(): void {
        this._router.navigate(['/tour']);
    }
    
}        
