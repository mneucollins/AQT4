import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './findmoreoptions.component.html',
    styleUrls: ['./findmoreoptions.component.css']
})

export class FindMoreOptionsComponent{
    constructor ( private _router: Router){};

    onFewerOptions(): void {
        this._router.navigate(['/find_a_name']);
    }

    onFindName(): void {}

}
