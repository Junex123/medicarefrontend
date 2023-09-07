import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { User } from '../Class/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  user: User = new User();
  isValid!: boolean;
  message!: string;

  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    this.userService.userSignUp(this.user).subscribe({
      next: (response) => {
        this.isValid = true;
        this.message = 'Successfully Registered! Sign In to Continue!';
      }, error: (error) => {
        console.log(error);
        this.isValid = false;
        this.message = 'E-mail address already exists!';
      }
    })

  }

  onClick() {
    this.router.navigate(['/login']);
  }
}
