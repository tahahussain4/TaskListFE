import { Component } from '@angular/core';
import { GetHomeService } from './get-home.service';
import {LoginService} from './login.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  homeservice : GetHomeService;
  token ="";
  
  username = "";
  password = "";

  buttonClick(){
  	console.log("button is clicked");
  	this.homeservice.getHome().subscribe((title) => this.title=title)
  }

  login(){
    console.log(this.username);
    console.log(this.password);
    this.loginService.doLogin(this.username,this.password).subscribe(
      {
        next(response : Response) {
          console.log(response.body)
          this.token = response.headers.get("Authorization")
          console.log(this.token);
        }
      }
      );
  }

  constructor(private homeService : GetHomeService,
    private loginService : LoginService){
  	this.homeservice = homeService;
  }
}

class User{
  username : String;
  password : String;
}