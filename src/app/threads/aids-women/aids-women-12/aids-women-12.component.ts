import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-women-12',
  templateUrl: './aids-women-12.component.html',
  styleUrls: [
        '../../threads-base.css',
        '../aids-women-base.css',
        './aids-women-12.component.css'
    ]
})
export class AidsWomen12Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavForward(): void {
    this._router.navigate(['/aids-women-13']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-women-11']);
  }
  onThreads(): void {
    this._router.navigate(['/threads']);
  }

}
