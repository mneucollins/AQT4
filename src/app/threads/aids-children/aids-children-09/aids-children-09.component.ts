import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-children-09',
  templateUrl: './aids-children-09.component.html',
  styleUrls: [
    '../../threads-base.css',
    '../aids-children-base.css',
    './aids-children-09.component.css'
  ]
})
export class AidsChildren09Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/aids-children-end']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-children-08']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }
  
}
