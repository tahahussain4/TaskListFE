import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http'
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
	url :any  = "http://localhost:8080/app/login"
	body :any =`username={username}&password={password}`
  constructor(private http : Http) {

   }

   public doLogin(username : String, password : String) : Observable<any>{
   
  	let retVal = this.http.post(
  		this.url,

  		{"username":username,"password":password}
  	)

  	return retVal;
   }


  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'text/plain');
    headers.append('Content-Type', 'json/application');

    return headers;
  }

}
