import { Injectable } from '@angular/core';

//import the mock data
import { TOURS } from './mock-tours';

@Injectable()
export class TourService {
  //getRandomPanel(): Promise<HTMLImageElement> {
  getDemoTour() {
      //return Promise.resolve(PANELS[0]);
      //return TOURS[0];
      return "app/services/mock-tour/tour1.mp4";
  }

}
