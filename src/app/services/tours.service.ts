import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ITour } from '../interfaces/tour';

@Injectable()

export class TourService {
    //the following loads a local json file. 
    //In most applications this should be replaced with an http request
    private _tourUrl = 'assets/api/tours/tour.json';

    constructor (private _http: Http){}
   
    getTours(): Observable<ITour[]>{
        return this._http.get(this._tourUrl)
            .map((response: Response) => <ITour[]> response.json())
            .do (data => console.log( 'All: '+ JSON.stringify(data)))
            .catch (this.handleError);
    }

    getTour(id: number): Observable<ITour> {
        return this.getTours()
            .map((tours: ITour[]) => tours.find(t => t.tourId === id));
    }

    private handleError (error:Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }   
} 
