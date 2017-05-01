import { NgModule } from '@angular/core';
import { GlobalNav6Component } from './globalnav6.component';
import { GlobalNav4Component } from './globalnav4.component';
import { CommonModule } from '@angular/common';

@NgModule ({
    declarations: [ 
        GlobalNav6Component,
        GlobalNav4Component 
    ],
    imports: [ CommonModule ],
    exports: [
        CommonModule,
        GlobalNav6Component,
        GlobalNav4Component
    ]
})

export class SharedModule {}