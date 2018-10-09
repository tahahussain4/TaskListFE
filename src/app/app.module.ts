import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GetHomeService} from './get-home.service'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RegisterServiceService } from './register-service.service'
import { LoginService} from './login.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GetHomeService,RegisterServiceService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class User{
  username : String;
  password : String;
}