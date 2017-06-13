import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-women-05',
  templateUrl: './aids-women-05.component.html',
  styleUrls: [
        '../../threads-base.css',
        '../aids-women-base.css',
        './aids-women-05.component.css'
    ]
})
export class AidsWomen05Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavForward(): void {
    this._router.navigate(['/aids-women-06']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-women-04']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }

}
