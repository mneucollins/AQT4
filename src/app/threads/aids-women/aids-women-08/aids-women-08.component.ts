import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-women-08',
  templateUrl: './aids-women-08.component.html',
  styleUrls: [
        '../../threads-base.css',
        '../aids-women-base.css',
        './aids-women-08.component.css'
    ]
})
export class AidsWomen08Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavForward(): void {
    this._router.navigate(['/aids-women-09']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-women-07']);
  }
  onThreads(): void {
    this._router.navigate(['/threads']);
  }

}
