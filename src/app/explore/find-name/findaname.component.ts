import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './findaname.component.html',
    styleUrls: [
        '../explore-base.css',
        './findaname.component.css'
    ]
})


export class FindANameComponent{
    constructor ( private _router: Router){};

    querytypes = ["Name", "Year", "Maker Name", "City", "Block ID"];

    model = {
        querytype: "Name",
        querystring: ""
    };

    onFind(): void {
        
    }



    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

}
