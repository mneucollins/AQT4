import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {CaSearchService} from "../../services/ca-search.service";
import {TestRecord} from "../../services/ca-search.service";

@Component({
    templateUrl: './findaname.component.html',
    styleUrls: [
        '../explore-base.css',
        './findaname.component.css'
    ],
    providers: [CaSearchService]
})


export class FindANameComponent{
    constructor ( private _router: Router, private ca: CaSearchService){};
    submitted = false;

    querytypes = ["Name", "Year", "Maker Name", "City", "Block ID"];

    model = {
        querytype: "Name",
        querystring: ""
    };

    results: TestRecord[];
    resstr:string;
    errorMessage:string;

    onFind(): void {
        //this.results = [this.model.querytype, this.model.querystring];
        //this.results = this.ca.getTestResults();

        this.ca.getTestResults()
            .subscribe(results => this.results = results,
                error => this.errorMessage = <any>error);
        console.log(this.errorMessage);

        this.submitted = true;
    }

    onReset(): void {
        this.submitted = false;
        this.model.querystring = "";
        this.model.querytype = "Name";
        this.results = [];
    }



}
