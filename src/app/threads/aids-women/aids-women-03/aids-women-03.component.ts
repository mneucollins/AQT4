import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-women-03',
  templateUrl: './aids-women-03.component.html',
  styleUrls: [
        '../../threads-base.css',
        '../aids-women-base.css',
        './aids-women-03.component.css'
    ]
})
export class AidsWomen03Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavForward(): void {
    this._router.navigate(['/aids-women-04']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-women-02']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }

}
