import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

var TESTSLIDE: String = "<p>Lorem ipsum etc.</p><p><img src=\"http://tambourelli.net/wp-content/uploads/2017/04/lorem-ipsum.jpg\"></p>";

@Component({
  selector: 'app-thread-slide',
  templateUrl: './thread-slide.component.html',
  styleUrls: ['./thread-slide.component.css']
})
export class ThreadSlideComponent implements OnInit {

  //@Input()
  //slide: String;

  slide = TESTSLIDE;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    //    this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id'])).subscribe(hero => this.hero = hero);

  }

}
