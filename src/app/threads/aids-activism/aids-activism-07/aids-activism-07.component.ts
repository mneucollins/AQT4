import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-activism-07',
  templateUrl: './aids-activism-07.component.html',
  styleUrls: [
      '../../threads-base.css',
      '../aids-activism-base.css',
      './aids-activism-07.component.css'
  ]
})
export class AidsActivism07Component implements OnInit {

  constructor( private _router: Router ) { };

  ngOnInit() {
  }
  onNavForward(): void {
      this._router.navigate(['/aids-activism-08']);
  }
  onNavBack(): void {
      this._router.navigate(['/aids-activism-06']);
  }
  
  onThreads(): void {
      this._router.navigate(['/threads']);
  }

}
