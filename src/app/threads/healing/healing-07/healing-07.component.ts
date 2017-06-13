import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healing-07',
  templateUrl: './healing-07.component.html',
  styleUrls:  [
    '../../threads-base.css',
    '../healing-base.css',
    './healing-07.component.css'
  ]
})
export class Healing07Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/healing-08']);
  }
  onNavBack(): void {
    this._router.navigate(['/healing-06']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }
}
