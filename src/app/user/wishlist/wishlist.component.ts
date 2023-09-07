import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/Class/cart-item';
import { Product } from 'src/app/Class/product';
import { WishlistItem } from 'src/app/Class/wishlist-item';
import { CartService } from 'src/app/Services/cart.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
 
  constructor(private wishlistservice: WishlistService,private cartservice:CartService) { }
  ngOnInit(): void {
    this.wishlistDetails();
  }
  product!: Product[];
  wishlistitem: WishlistItem[] = [];
  totalPrice: number = 0;
  totalQuantity2: number = 0;

  wishlistDetails() {
    this.wishlistitem = this.wishlistservice.wishlistItems;
    this.wishlistservice.totalQuantity2.subscribe(data => this.totalQuantity2 = data);
    
    
    
  }


  removeItem(cartItem: WishlistItem) {
    this.wishlistservice.remove(cartItem);
  }
  addToCart(product: Product) {
    const cartItem = new CartItem(product);
    this.cartservice.addToCart(cartItem);
   
  }
}