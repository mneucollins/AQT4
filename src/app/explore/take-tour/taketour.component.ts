import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { TourService } from '../../services/tours.service';
import { ITour } from '../../interfaces/tour'


@Component({
    templateUrl: './taketour.component.html',
    styleUrls: [
        '../explore-base.css',
        './taketour.component.css'
    ],
    providers: [TourService],

})

export class TakeTourComponent implements OnInit{

    tours: ITour[];
    errorMessage:string;

    constructor ( private _router: Router, private _tourService: TourService){};
    ngOnInit():void {
        this._tourService.getTours()
            .subscribe(tours => this.tours = tours,
                error => this.errorMessage = <any>error);    
    }

}