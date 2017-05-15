import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-activism-08',
  templateUrl: './aids-activism-08.component.html',
  styleUrls: [
    '../../threads-base.css',
    '../aids-activism-base.css',
    './aids-activism-08.component.css'
    ]
})
export class AidsActivism08Component implements OnInit {

  constructor( private _router: Router ) { };

  ngOnInit() {
  }
  onNavForward(): void {
      this._router.navigate(['/aids-activism-09']);
  }  
  onNavBack(): void {
      this._router.navigate(['/aids-activism-07']);
  }

  onThreads(): void {
      this._router.navigate(['/threads']);
  }

}
