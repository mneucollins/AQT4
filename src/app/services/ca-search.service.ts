import { Injectable } from '@angular/core';
import {Http, Headers, URLSearchParams, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


export interface TestRecord {
  object_id:string,
  id:string,
  idno:string,
  display_label:string
}

@Injectable()
export class CaSearchService {

  http:Http;
  //auth: String;

  //Collective Access DB
  ca_base:string = "http://atecquilt.utdallas.edu/collectiveaccess/providence/service.php/find/";
  ca_tables = {
    name: "",
    year: "",
    maker: "",
    city: "",
    block: "",
    panel: "",
    test: "ca_objects/"
  };

  begin_search = "?pretty=1&q=";

  constructor(http:Http) {
    this.http = http;
  }

  getTestResults():Observable<any> {
    var result = this.http
      .get('.mock-json/objects.json')
      .map(res => res.json())
      .do (data => console.log( 'JSON: '+ JSON.stringify(data)))
      .catch (this.handleError);

    return result;
  }

  getResults(querytype:string, querystring:string):string {
    var search_term = "*" + querystring + "*";
    var url = this.ca_base + this.ca_tables.test + this.begin_search + search_term;

    var result = this.http
      .get(url)
      .map(res => res.json())
      .do (data => console.log( 'JSON: '+ JSON.stringify(data)))
      .catch (this.handleError);

    return result.toString();
  }

  getMedia():string {
    //return media URL

    return "";
  }

  private handleError (error:Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}
