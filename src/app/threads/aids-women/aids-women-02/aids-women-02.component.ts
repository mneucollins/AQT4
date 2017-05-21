import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-women-02',
  templateUrl: './aids-women-02.component.html',
  styleUrls: [
        '../../threads-base.css',
        '../aids-women-base.css',
        './aids-women-02.component.css'
    ]
})
export class AidsWomen02Component implements OnInit {
  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavForward(): void {
    this._router.navigate(['/aids-women-03']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-women-01']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }

}
