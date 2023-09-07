import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Class/user';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  
  username!: string
  user: User = new User();
  constructor(private route: ActivatedRoute,
    private loginservice:LoginService,
     private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    this.getuserdetail();
    
  }
  getuserdetail() {
    this.loginservice.getCurrentUser().subscribe({
      next: (data) => {
        this.user = data;
      }, error: (error) => {
        console.log(error);
        alert('No user found');
      }
    })
  }
}
