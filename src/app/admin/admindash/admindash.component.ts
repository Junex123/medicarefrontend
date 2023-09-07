import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';


@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent  {
 

  username!: string;
  name!: string;
  constructor(private loginService: LoginService) {
    this.username = this.loginService.getUserDetails().username;
    this.name = this.loginService.getUserDetails().firstName + ' ' + this.loginService.getUserDetails().lastName;

  }

}
