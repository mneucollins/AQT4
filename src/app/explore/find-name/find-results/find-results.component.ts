import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-find-results',
  templateUrl: './find-results.component.html',
  styleUrls: ['./find-results.component.css']
})
export class FindResultsComponent implements OnInit {

    //@Input() results: Panel[];
    @Input() results: string[];
    @Input() display: boolean;


  constructor() { }

  ngOnInit() {
  }

}
