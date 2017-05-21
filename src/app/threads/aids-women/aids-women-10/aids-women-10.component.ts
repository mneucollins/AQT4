import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-women-10',
  templateUrl: './aids-women-10.component.html',
  styleUrls: [
        '../../threads-base.css',
        '../aids-women-base.css',
        './aids-women-10.component.css'
    ]
})
export class AidsWomen10Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavForward(): void {
    this._router.navigate(['/aids-women-11']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-women-09']);
  }
  onThreads(): void {
    this._router.navigate(['/threads']);
  }

}
