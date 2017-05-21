import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-women-06',
  templateUrl: './aids-women-06.component.html',
  styleUrls: [
        '../../threads-base.css',
        '../aids-women-base.css',
        './aids-women-06.component.css'
    ]
})
export class AidsWomen06Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavForward(): void {
    this._router.navigate(['/aids-women-07']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-women-05']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }

}
