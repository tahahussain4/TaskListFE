import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './model';


@Injectable()
export class RegisterServiceService {
 private baseUrl: string = 'http://localhost:8080/app';

  constructor(private http : Http) { }

  register(user : User) : Observable<any>{
  	let returnValue= this.http.post(`${this.baseUrl}/register`,
  		{body : JSON.stringify(user),headers: this.getHeaders()}).map((response: Response) => response.json());
  	return returnValue;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'text/plain');
    headers.append('Content-Type', 'json/application');

    return headers;
  }
}
