import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'

import { SharedModule } from '../shared/shared.module';

import { AidsActivism01Component } from './aids_activism/aids_activism_01.component';
import { AidsActivism02Component } from './aids_activism/aids_activism_02.component';
import { AidsActivism03Component } from './aids_activism/aids_activism_03.component';
import { AidsActivism04Component } from './aids_activism/aids_activism_04.component';
// import { AidsActivism05Component } from './aids_activism/aids_activism_05.component';



@NgModule({
    declarations:[
        AidsActivism01Component,
        AidsActivism02Component,
        AidsActivism03Component,
        AidsActivism04Component,
        //AidsActivism05Component,
    ],

    imports:[
        HttpModule,
        SharedModule,
        RouterModule.forChild([
            { path: 'aids_activism_01', component: AidsActivism01Component },
            { path: 'aids_activism_02', component: AidsActivism02Component },
            { path: 'aids_activism_03', component: AidsActivism03Component },
            { path: 'aids_activism_04', component: AidsActivism04Component },
            //{ path: 'aids_activism_05', component: AidsActivism05Component },
        ])
    ],
    providers:[]
})

export class ThreadsModule {}
