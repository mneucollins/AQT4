import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-activism-02',
  templateUrl: './aids-activism-02.component.html',
  styleUrls: [
    '../../threads-base.css',
    '../aids-activism-base.css',
    './aids-activism-02.component.css'
    ]
})
export class AidsActivism02Component implements OnInit {

  constructor(private _router: Router) { }

    ngOnInit() {
    }
    
    onNavForward(): void {
        this._router.navigate(['/aids-activism-03']);
    }
    
    onNavBack(): void {
        this._router.navigate(['/aids-activism-01']);
    }


}
