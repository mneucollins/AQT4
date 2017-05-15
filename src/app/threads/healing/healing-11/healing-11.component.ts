import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healing-11',
  templateUrl: './healing-11.component.html',
  styleUrls: [
    '../../threads-base.css',
    '../healing-base.css',
    './healing-11.component.css'
  ]
})
export class Healing11Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/healing-12']);
  }
  onNavBack(): void {
    this._router.navigate(['/healing-10']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }



}
