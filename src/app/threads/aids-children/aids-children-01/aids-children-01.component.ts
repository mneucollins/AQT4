import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aids-children-01',
  templateUrl: './aids-children-01.component.html',
  styleUrls: [
    '../../threads-base.css',
    '../aids-children-base.css',
    './aids-children-01.component.css'
  ]
})
export class AidsChildren01Component implements OnInit {
  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/aids-children-02']);
  }
  // onNavBack(): void {
  //   this._router.navigate(['/aids-children-01']);
  // }
  // onThreads(): void {
  //     this._router.navigate(['/threads']);
  // }
}
