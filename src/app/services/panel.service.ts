import { Injectable } from '@angular/core';

//import the mock data
import { PANELS } from './mock-panels';

@Injectable()
export class PanelService {
  //getRandomPanel(): Promise<HTMLImageElement> {
  getRandomPanel(): HTMLImageElement {
      //return Promise.resolve(PANELS[Math.round(Math.random() * (PANELS.length - 1)]);
      return PANELS[Math.round(Math.random() * (PANELS.length - 1))];
  }

}
