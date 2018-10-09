import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from './../register-service.service';
import { environment } from '../../environments/environment';
import { User } from './../model' 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	apiURL = environment.apiURL;
	username : String;
	password : String;

	returnedStuff : any;

  constructor(private registerService : RegisterServiceService) { }

  ngOnInit() {
  }

  onSubmit(){
  	this.registerService.register(new User(this.username,this.password)).subscribe((data) => this.returnedStuff=data)
  }

}
