import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  //selector: 'app-aids-activism-05',
  templateUrl: './aids-activism-05.component.html',
  styleUrls: [
    '../aids_activism_base.css',
    './aids-activism-05.component.css']
})
export class AidsActivism05Component implements OnInit {

  constructor( private _router: Router ) { };

  ngOnInit() {
  }
  
  onNavForward(): void {
      this._router.navigate(['/aids_activism_06']);
  }
  onNavBack(): void {
      this._router.navigate(['/aids_activism_04']);
  }

}
