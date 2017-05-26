import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-viewtour',
  templateUrl: './viewtour.component.html',
  styleUrls: [
        '../explore-base.css',
        './viewtour.component.css'
  ] 
})
export class ViewTourComponent implements OnInit {

  constructor( private _route: ActivatedRoute) { 
    console.log(this._route.snapshot.params['tourID']);
  }

  ngOnInit() {
  }

}
