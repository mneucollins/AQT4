import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-children-06',
  templateUrl: './aids-children-06.component.html',
  styleUrls: [
    '../../threads-base.css',
    '../aids-children-base.css',
    './aids-children-06.component.css'
  ]
})
export class AidsChildren06Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/aids-children-07']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-children-05']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }
  
}
