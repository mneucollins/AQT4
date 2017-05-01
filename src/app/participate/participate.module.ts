import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// CommonModule is now imported from SharedModule
import { SharedModule } from '../shared/shared.module';
// Components
import { MyParticipationComponent } from './participate.component';



@NgModule({
    declarations:[
        MyParticipationComponent,
        // ExploreRandomComponent,
    ],

    imports:[
        FormsModule,
        // CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: 'my_quilt', component: MyParticipationComponent },
            // { path: 'exploreRandom', component: ExploreRandomComponent }
        ])
    ],
    providers:[]
})

export class ParticipateModule {}
