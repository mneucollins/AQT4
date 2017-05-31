import { Component, OnInit, Input } from '@angular/core';
import {TestRecord} from "../../../services/ca-search.service";

@Component({
  selector: 'app-find-results',
  templateUrl: './find-results.component.html',
  styleUrls: ['./find-results.component.css']
})
export class FindResultsComponent implements OnInit {

    //@Input() results: Panel[];
    @Input() results: TestRecord[];
    @Input() display: boolean;


  constructor() { }

  ngOnInit() {
  }

}
