import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/Class/credentials';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  credentials: Credentials = new Credentials();
  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    this.loginService.generateToken(this.credentials).subscribe({
      next: (response) => {
        //user is logged in
        this.loginService.loginUser(response.token);
        this.loginService.getCurrentUser().subscribe({
          next: (admin) => {
            this.loginService.setUserDetails(admin);
            //redirect: to admin dashboard
            if (this.loginService.getUserRole() == 'ADMIN') {
              this.router.navigate(['/adminhome']);
            }
          }, error: (error) => {
            console.log(error);
          }
        })
      }, error: (error) => {
        console.log(error);
        alert('Invalid Credentials!');
      }
    })
  }
}
