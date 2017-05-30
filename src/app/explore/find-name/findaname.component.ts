import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './findaname.component.html',
    styleUrls: [
        '../explore-base.css',
        './findaname.component.css'
    ],
})


export class FindANameComponent{
    constructor ( private _router: Router){};
    submitted = false;

    querytypes = ["Name", "Year", "Maker Name", "City", "Block ID"];

    model = {
        querytype: "Name",
        querystring: ""
    };

    results = [];

    onFind(): void {
        this.submitted = true;
        this.results = [this.model.querytype, this.model.querystring];

    }

    onReset(): void {
        this.submitted = false;
        this.model.querystring = "";
        this.model.querytype = "Name";
        this.results = [this.model.querytype, this.model.querystring];
    }



    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

}
