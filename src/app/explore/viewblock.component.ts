import { Component, OnInit } from '@angular/core';
import { IBlock } from '../interfaces/block';
import { BlockService } from '../services/block.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './viewtour.component.html',
    styleUrls: [
        'explore-base.css',
        './viewtour.component.css'
    ]
})

export class ViewBlockComponent implements OnInit {
    blocks: IBlock[];
    errorMessage: string;

    constructor ( private _router: Router,
                 private _blockService: BlockService ){};
    ngOnInit(): void {

//mote I want to get only 1 block but having trouble with that        
        this._blockService.getBlocks()
            .subscribe (blocks=>this.blocks = blocks,
                error => this.errorMessage = <any>error );
        
    }

}