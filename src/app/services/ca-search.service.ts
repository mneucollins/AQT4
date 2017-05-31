import { Injectable } from '@angular/core';
import {Http, Headers, URLSearchParams, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


export interface TestRecord {
  id:number,
  username:string,
  name:string,
  phone:string,
  website:string
}

@Injectable()
export class CaSearchService {

  http:Http;
  //auth: String;

  //Collective Access DB
  ca_base:string = "http://atecquilt.utdallas.edu/collectiveaccess/providence/service.php/find/";
  ca_testbase:string = "http://quilt.utdallas.edu/collectiveaccess/providence/service.php/find/";
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
  browse_term = "*";

  response:any;



  constructor(http:Http) {
    this.http = http;
  }

  getTestResults(): Observable<TestRecord[]> {
    var results = this.http
      .get('http://jsonplaceholder.typicode.com/users')
      .map(res => <TestRecord[]>res.json())
      //.subscribe(res => {
      //  this.response = res;
      //});
      .do (data => console.log( 'JSON: '+ JSON.stringify(data)))
      .catch (this.handleError);

      return results;
  }

  getResults(querytype:string, querystring:string):Observable<any[]> {
    var search_term = "*" + querystring + "*";
    var url = this.ca_testbase + this.ca_tables.test + this.begin_search + this.browse_term;
    //var url = this.ca_base + this.ca_tables.test + this.begin_search + search_term;

    var result = this.http
      .get(url)
      .map(res => res.json())
      .do (data => console.log( 'JSON: '+ JSON.stringify(data)))
      .catch (this.handleError);

    return result;
  }

  getMedia():string {
    //return media URL
    var url = this.ca_testbase + this.ca_tables.test + this.begin_search + this.browse_term;


    return "";
  }

  private handleError (error:Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}
