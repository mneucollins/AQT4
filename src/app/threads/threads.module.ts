import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'

import { SharedModule } from '../shared/shared.module';

// import { ExploreStoriesComponent } from '../explore/explorestories.component';
import { AidsActivism01Component } from './aids-activism/aids-activism-01/aids-activism-01.component';
import { AidsActivism02Component } from './aids-activism/aids-activism-02/aids-activism-02.component';
import { AidsActivism03Component } from './aids-activism/aids-activism-03/aids-activism-03.component';
import { AidsActivism04Component } from './aids-activism/aids-activism-04/aids-activism-04.component';
import { AidsActivism05Component } from './aids-activism/aids-activism-05/aids-activism-05.component';
import { AidsActivism06Component } from './aids-activism/aids-activism-06/aids-activism-06.component';
import { AidsActivism07Component } from './aids-activism/aids-activism-07/aids-activism-07.component';
import { AidsActivism08Component } from './aids-activism/aids-activism-08/aids-activism-08.component';
import { AidsActivism09Component } from './aids-activism/aids-activism-09/aids-activism-09.component';
import { AidsActivismEndComponent } from './aids-activism/aids-activism-end/aids-activism-end.component';
import { Healing01Component } from './healing/healing-01/healing-01.component';
import { Healing02Component } from './healing/healing-02/healing-02.component';
import { Healing03Component } from './healing/healing-03/healing-03.component';
import { Healing04Component } from './healing/healing-04/healing-04.component';
import { Healing05Component } from './healing/healing-05/healing-05.component';
import { Healing06Component } from './healing/healing-06/healing-06.component';
import { Healing07Component } from './healing/healing-07/healing-07.component';
import { Healing08Component } from './healing/healing-08/healing-08.component';
import { Healing09Component } from './healing/healing-09/healing-09.component';
import { Healing10Component } from './healing/healing-10/healing-10.component';
import { Healing11Component } from './healing/healing-11/healing-11.component';
import { Healing12Component } from './healing/healing-12/healing-12.component';
import { HealingEndComponent } from './healing/healing-end/healing-end.component';
import { AidsWomen01Component } from './aids-women/aids-women-01/aids-women-01.component';
import { AidsWomen02Component } from './aids-women/aids-women-02/aids-women-02.component';
import { AidsWomen03Component } from './aids-women/aids-women-03/aids-women-03.component';
import { AidsWomen04Component } from './aids-women/aids-women-04/aids-women-04.component';
import { AidsWomen05Component } from './aids-women/aids-women-05/aids-women-05.component';
import { AidsWomen06Component } from './aids-women/aids-women-06/aids-women-06.component';
import { AidsWomen07Component } from './aids-women/aids-women-07/aids-women-07.component';
import { AidsWomen08Component } from './aids-women/aids-women-08/aids-women-08.component';
import { AidsWomen09Component } from './aids-women/aids-women-09/aids-women-09.component';
import { AidsWomen10Component } from './aids-women/aids-women-10/aids-women-10.component';
import { AidsWomen11Component } from './aids-women/aids-women-11/aids-women-11.component';
import { AidsWomen12Component } from './aids-women/aids-women-12/aids-women-12.component';
import { AidsWomen13Component } from './aids-women/aids-women-13/aids-women-13.component';
import { AidsWomenEndComponent } from './aids-women/aids-women-end/aids-women-end.component';
import { ThreadsComponent } from '../threads/threads.component';


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
        AidsActivismEndComponent,
        Healing01Component,
        Healing02Component,
        Healing03Component,
        Healing04Component,
        Healing05Component,
        Healing06Component,
        Healing07Component,
        Healing08Component,
        Healing09Component,
        Healing10Component,
        Healing11Component,
        Healing12Component,
        HealingEndComponent,
        AidsWomen01Component,
        AidsWomen02Component,
        AidsWomen03Component,
        AidsWomen04Component,
        AidsWomen05Component,
        AidsWomen06Component,
        AidsWomen07Component,
        AidsWomen08Component,
        AidsWomen09Component,
        AidsWomen10Component,
        AidsWomen11Component,
        AidsWomen12Component,
        AidsWomen13Component,
        AidsWomenEndComponent,
        ThreadsComponent,
    ],

    imports:[
        HttpModule,
        SharedModule,
        RouterModule.forChild([
            { path: 'threads', component: ThreadsComponent },
            { path: 'aids-activism-01', component: AidsActivism01Component },
            { path: 'aids-activism-02', component: AidsActivism02Component },
            { path: 'aids-activism-03', component: AidsActivism03Component },
            { path: 'aids-activism-04', component: AidsActivism04Component },
            { path: 'aids-activism-05', component: AidsActivism05Component },
            { path: 'aids-activism-06', component: AidsActivism06Component },
            { path: 'aids-activism-07', component: AidsActivism07Component },
            { path: 'aids-activism-08', component: AidsActivism08Component },
            { path: 'aids-activism-09', component: AidsActivism09Component },
            { path: 'aids-activism-end', component: AidsActivismEndComponent },
            { path: 'healing-01', component: Healing01Component },
            { path: 'healing-02', component: Healing02Component },
            { path: 'healing-03', component: Healing03Component },
            { path: 'healing-04', component: Healing04Component },
            { path: 'healing-05', component: Healing05Component },
            { path: 'healing-06', component: Healing06Component },
            { path: 'healing-07', component: Healing07Component },
            { path: 'healing-08', component: Healing08Component },
            { path: 'healing-09', component: Healing09Component },
            { path: 'healing-10', component: Healing10Component },
            { path: 'healing-11', component: Healing11Component },
            { path: 'healing-12', component: Healing12Component },
            { path: 'healing-end', component: HealingEndComponent },
            { path: 'aids-women-01', component: AidsWomen01Component },
            { path: 'aids-women-02', component: AidsWomen02Component },
            { path: 'aids-women-03', component: AidsWomen03Component },
            { path: 'aids-women-04', component: AidsWomen04Component },
            { path: 'aids-women-05', component: AidsWomen05Component },
            { path: 'aids-women-06', component: AidsWomen06Component },
            { path: 'aids-women-07', component: AidsWomen07Component },
            { path: 'aids-women-08', component: AidsWomen08Component },
            { path: 'aids-women-09', component: AidsWomen09Component },
            { path: 'aids-women-10', component: AidsWomen10Component },
            { path: 'aids-women-11', component: AidsWomen11Component },
            { path: 'aids-women-12', component: AidsWomen12Component },
            { path: 'aids-women-13', component: AidsWomen13Component },
            { path: 'aids-women-end', component: AidsWomenEndComponent },
        ])
    ],
    providers:[]
})

export class ThreadsModule {}
