import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-activism-09',
  templateUrl: './aids-activism-09.component.html',
  styleUrls: [
    '../aids-activism-base.css', 
    './aids-activism-09.component.css'
    ]
})
export class AidsActivism09Component implements OnInit {

  constructor( private _router: Router ) { };

  ngOnInit() {
  }
  onNavForward(): void {
      this._router.navigate(['/threads']);
  }
  onNavBack(): void {
      this._router.navigate(['/aids-activism-08']);
  }

}
