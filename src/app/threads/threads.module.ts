import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'

import { SharedModule } from '../shared/shared.module';

import { ExploreStoriesComponent } from '../explore/explorestories.component';
import { AidsActivism01Component } from './aids-activism/aids-activism-01/aids-activism-01.component';
import { AidsActivism02Component } from './aids-activism/aids-activism-02/aids-activism-02.component';
import { AidsActivism03Component } from './aids-activism/aids-activism-03/aids-activism-03.component';
import { AidsActivism04Component } from './aids-activism/aids-activism-04/aids-activism-04.component';
import { AidsActivism05Component } from './aids-activism/aids-activism-05/aids-activism-05.component';
import { AidsActivism06Component } from './aids-activism/aids-activism-06/aids-activism-06.component';
import { AidsActivism07Component } from './aids-activism/aids-activism-07/aids-activism-07.component';
import { AidsActivism08Component } from './aids-activism/aids-activism-08/aids-activism-08.component';
import { AidsActivism09Component } from './aids-activism/aids-activism-09/aids-activism-09.component';
import { AidsActivism10Component } from './aids-activism/aids-activism-10/aids-activism-10.component';
// import { AidsActivism05Component } from './aids-activism/aids_activism_05.component';



@NgModule({
    declarations:[
        AidsActivism01Component,
        AidsActivism02Component,
        AidsActivism03Component,
        AidsActivism04Component,
        AidsActivism05Component,
        AidsActivism06Component,
        AidsActivism07Component,
        AidsActivism08Component,
        AidsActivism09Component,
        AidsActivism10Component,
    ],

    imports:[
        HttpModule,
        SharedModule,
        RouterModule.forChild([
            { path: 'threads', component: ExploreStoriesComponent },
            { path: 'aids-activism-01', component: AidsActivism01Component },
            { path: 'aids-activism-02', component: AidsActivism02Component },
            { path: 'aids-activism-03', component: AidsActivism03Component },
            { path: 'aids-activism-04', component: AidsActivism04Component },
            { path: 'aids-activism-05', component: AidsActivism05Component },
            { path: 'aids-activism-06', component: AidsActivism06Component },
            { path: 'aids-activism-07', component: AidsActivism07Component },
            { path: 'aids-activism-08', component: AidsActivism08Component },
            { path: 'aids-activism-09', component: AidsActivism09Component },
            { path: 'aids-activism-10', component: AidsActivism10Component },
        ])
    ],
    providers:[]
})

export class ThreadsModule {}
