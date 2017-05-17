import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healing-02',
  templateUrl: './healing-02.component.html',
  styleUrls: [
    '../../threads-base.css',
    '../healing-base.css',
    './healing-02.component.css'
  ]
})
export class Healing02Component implements OnInit {

  constructor ( private _router: Router){};
  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/healing-03']);
  }
  onNavBack(): void {
    this._router.navigate(['/healing-01']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }
}
