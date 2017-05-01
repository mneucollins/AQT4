import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './explore.component.html',
    styleUrls: ['./explore.component.css']
})

export class ExploreComponent{
    constructor ( private _router: Router){};

    onExploreTheQuilt(): void {
        this._router.navigate(['/explore_the_quilt']);
    }

    onExploreTheStories(): void {
        this._router.navigate(['/explore_stories']);
    }


}
