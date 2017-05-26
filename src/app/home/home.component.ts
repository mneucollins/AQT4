import { Component } from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    public pageTitle: string = 'AQT Home';    
    logoWidth: number = 50;

    showAbout: boolean = false;
    toggleAbout() {
        this.showAbout = !this.showAbout;
    }

    onCloseAbout() {

    }   

}
