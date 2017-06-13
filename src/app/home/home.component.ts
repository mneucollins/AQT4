import { Component } from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    public pageTitle: string = 'AQT Home';    
    logoWidth: number = 50;

    // 'about' is now implemented as a separate module because of difficulty stopping embedded video
    // hideAbout: boolean = true;
    // toggleAbout() {
    //    this.hideAbout = !this.hideAbout;
    // }
    // onCloseAbout() {
    // }   

}
