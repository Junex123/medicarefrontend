import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { LoginService } from 'src/app/Services/login.service';
import { WishlistService } from 'src/app/Services/wishlist.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  medicineName!: string;
  username!: string;
  name!: string;
  totalPrice: number = 0;
  totalQuantity: number = 0;
  totalQuantity2: number = 0;
  medicine: string[] = ['Anti Hypertensives', 'Anti Diabetic', 'Gastro Intestinal', 'Urology', 'Anti Infectives', 'Gynaecological', 'Analgesics', 'Vitamins'];
  constructor(public loginService: LoginService,
     private router: Router, private cartService: CartService,
     private wishlistservice:WishlistService,private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.updateCartStatus();
    this.updateWishlistStatus();
    this.username = this.loginService.getUserDetails().username;
    
   
  }
  
  onSearch(name: string) {
    if (name !== undefined) {
      console.log('navigating to search url');
      let url = "/searchproduct/" + name;
      this.router.navigateByUrl(url);
      
    } else {
      console.log('please enter a name');
    }
  }



  logout() {
    this.loginService.logout();
    window.location.reload();
  }
  updateWishlistStatus() {
    this.wishlistservice.totalPrice2.subscribe(data => this.totalPrice = data);
    this.wishlistservice.totalQuantity2.subscribe(data => this.totalQuantity2 = data);
  }

  updateCartStatus() {
    this.cartService.totalPrice.subscribe(data => this.totalPrice = data);
    this.cartService.totalQuantity.subscribe(data => this.totalQuantity = data);
  }
  getOrders() {
    let url = '/myorder/' + this.username;
    this.router.navigateByUrl(url);
  }

}