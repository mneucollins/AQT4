import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-activism-end',
  templateUrl: './aids-activism-end.component.html',
  styleUrls:  [
    '../../threads-base.css',
    '../aids-activism-base.css',
    './aids-activism-end.component.css'
    ]
})
export class AidsActivismEndComponent implements OnInit {

  constructor( private _router: Router ) { };

  ngOnInit() {
  }

  onNavBack(): void {
      this._router.navigate(['/aids-activism-08']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }

}
