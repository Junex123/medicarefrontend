import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/Class/cart-item';
import { Product } from 'src/app/Class/product';
import { WishlistItem } from 'src/app/Class/wishlist-item';
import { CartService } from 'src/app/Services/cart.service';
import { UserService } from 'src/app/Services/user.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  constructor(private userService: UserService, private router: Router,
    private wishlistservice:WishlistService,private cartservice:CartService) {
    this.getAllProducts();
  }
  product!: Product[];
  medicineName!: string;
  prod: Product = new Product();
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  event: any;

  onTableDataChange(event: any) {
    this.page = event;
  }

  getAllProducts() {
    this.userService.getAllMedicine().subscribe({
      next: (data) => {
        this.product = data;
        this.product.forEach((p) => {
          p.img = 'data:image/jpeg;base64,' + p.productImage.imageData;
        })
      }, error: (error) => {
        console.log(error);
        alert('No Medicines Found');
      }
    })
  }

  sortByPriceLowToHigh() {
    this.product.sort((a, b) => a.price - b.price);
  }
  sortByPriceHighToLow() {
    this.product.sort((a, b) => b.price - a.price);
  }
  sortByNameAscending() {
    this.product.sort((a, b) => a.name.localeCompare(b.name));
  }
  sortByNameDescending() {
    this.product.sort((a, b) => b.name.localeCompare(a.name));
  }
 
 
  getproductinfoBasedonID(name:string)
  {
    this.router.navigate(['viewproduct', name]);
  }
  addToWishlist(product: Product) {
    const wishlistItem = new WishlistItem(product);
    this.wishlistservice.addToWishlist(wishlistItem);
   
  }
  addToCart(product: Product) {
    const cartItem = new CartItem(product);
    this.cartservice.addToCart(cartItem);
   
  }
}
