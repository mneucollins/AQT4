import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-women-09',
  templateUrl: './aids-women-09.component.html',
  styleUrls: [
        '../../threads-base.css',
        '../aids-women-base.css',
        './aids-women-09.component.css'
    ]
})
export class AidsWomen09Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavForward(): void {
    this._router.navigate(['/aids-women-10']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-women-08']);
  }
  onThreads(): void {
    this._router.navigate(['/threads']);
  }

}
