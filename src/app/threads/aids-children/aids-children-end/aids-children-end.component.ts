import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-children-end',
  templateUrl: './aids-children-end.component.html',
  styleUrls: [
    '../../threads-base.css',
    '../aids-children-base.css',
    './aids-children-end.component.css'
  ]
})
export class AidsChildrenEndComponent implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  // onNavForward(): void {
  //   this._router.navigate(['/aids-children-end']);
  // }
  onNavBack(): void {
    this._router.navigate(['/aids-children-09']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }
  
}
