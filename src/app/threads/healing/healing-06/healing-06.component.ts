import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healing-06',
  templateUrl: './healing-06.component.html',
  styleUrls: [
    '../../threads-base.css',
    '../healing-base.css',
    './healing-06.component.css'
  ]
})
export class Healing06Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/healing-07']);
  }
  onNavBack(): void {
    this._router.navigate(['/healing-05']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }
}
