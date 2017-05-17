import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { BlockService } from '../services/block.service';

@Component({
    templateUrl: './viewrandom.component.html',
    styleUrls: [
        './explore-base.css',
        './viewrandom.component.css'
    ],
    providers: [BlockService],
})

export class ViewRandomComponent implements OnInit{

    panel: HTMLImageElement;

    constructor ( private _router: Router, private BlockService: BlockService){};

    ngOnInit(): void {
        this.getBlocks();
    }

    getBlocks(): void {
        //this.panel = this.BlockService.getRandomBlock();
         
        //this.PanelService.getRandomPanel().then(panel => this.panel = panel)
        //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
      }

}
