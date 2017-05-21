import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-women-end',
  templateUrl: './aids-women-end.component.html',
  styleUrls: [
        '../../threads-base.css',
        '../aids-women-base.css',
        './aids-women-end.component.css'
    ]
})
export class AidsWomenEndComponent implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavForward(): void {
    this._router.navigate(['/threads']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-women-13']);
  }
  onThreads(): void {
    this._router.navigate(['/threads']);
  }

}
