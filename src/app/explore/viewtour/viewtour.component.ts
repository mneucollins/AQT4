import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TourService } from '../../services/tours.service';
import { ITour } from '../../interfaces/tour';


@Component({
    templateUrl: './viewtour.component.html',
    styleUrls: [
        '../explore-base.css',
        './viewtour.component.css'
    ],
    providers: [TourService]
})

export class ViewTourComponent implements OnInit {
    tour: ITour;
    errorMessage:string;

    constructor (private _route: ActivatedRoute,
                 private _router: Router,
                 private _tourService: TourService ){}
    ngOnInit():void {
        let id = +this._route.snapshot.params['tourId'];

        this._tourService.getTour(id)
            .subscribe(tours => this.tour = tours,
                error => this.errorMessage = <any>error);

    }
    onBack(): void {
        this._router.navigate(['/view_tour']);
    }

}
