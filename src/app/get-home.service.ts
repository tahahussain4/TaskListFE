import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class GetHomeService {
 private baseUrl: string = 'http://localhost:8080/app';

  constructor(private http: Http) { }

  getHome() : Observable<any>  {
	let returnValue = this.http
      .get(`${this.baseUrl}/home`, {headers: this.getHeaders()}).map((response: Response) => response.json());
      console.log(returnValue);

     return returnValue;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    return headers;
  }

}
