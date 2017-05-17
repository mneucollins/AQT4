import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thread',
  //templateUrl: './thread.component.html',
  //styleUrls: ['./thread.component.css']
  template: `
    <h2>Thread Test</h2>
      <p (click)="getNext()">Next</p>
      <p (click)="getPrev()">Prev</p>
      <p></p>
    <app-thread-slide [slide]="selectedSlide"></app-thread-slide>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .threads {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .threads li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .threads li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .threads li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .threads .text {
      position: relative;
      top: -3px;
    }
    .threads .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
})
export class ThreadComponent implements OnInit {

  //var slides: String[];
  slides: String[];
  selectedSlide: String;
  slidenum: number;

  constructor() { }

  ngOnInit() {
    this.getSlides();
    this.slidenum = 0;
  }

  getNext() {
    if(this.slidenum < this.slides.length) {
      this.slidenum = this.slidenum + 1;
    }
    this.selectedSlide = this.slides[this.slidenum];
  }

  getPrev() {
    if(this.slidenum > 0) {
      this.slidenum = this.slidenum - 1;
    }
    this.selectedSlide = this.slides[this.slidenum];
  }


  getSlides(): void {
    //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);

    //slides = TEMPSLIDES;
  }


}
