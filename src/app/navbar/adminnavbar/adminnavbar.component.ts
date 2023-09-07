import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent {
  constructor(public loginService: LoginService, private router: Router, private cartService: CartService) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  logout() {
    this.loginService.logoutadmin();
    window.location.reload();
    
  }

}
