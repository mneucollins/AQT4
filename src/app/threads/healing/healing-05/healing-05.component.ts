import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healing-05',
  templateUrl: './healing-05.component.html',
  styleUrls: [
    '../../threads-base.css',
    '../healing-base.css',
    './healing-05.component.css'
]
})
export class Healing05Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/healing-06']);
  }
  onNavBack(): void {
    this._router.navigate(['/healing-04']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }  
}
