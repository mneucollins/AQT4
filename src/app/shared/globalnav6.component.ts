import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'globalnav6',
    templateUrl: './globalnav6.component.html',
    styleUrls: ['./globalnav6.component.css']
})

export class GlobalNav6Component {
    //global routing is in the app.module
    //GlobalNav6 a 6-icon menu bar for placement at the bottome of the screen
    constructor ( private _router: Router, private _location: Location ){};
    
    onHome(): void {
        this._router.navigate(['/home']);
    }
    onBack(): void {
        this._location.back();
    }
    
}        
