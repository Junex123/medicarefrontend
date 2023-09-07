import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/Class/cart-item';
import { Product } from 'src/app/Class/product';
import { WishlistItem } from 'src/app/Class/wishlist-item';
import { CartService } from 'src/app/Services/cart.service';
import { UserService } from 'src/app/Services/user.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit{
 

  medicineName!: string;
  name!: string;
  product!: Product[];

constructor(private route: ActivatedRoute, private userService: UserService,
  private wishlistservice:WishlistService,private cartservice:CartService,private _sanitizer: DomSanitizer) { }
ngOnInit(): void {
  this.medicineName = this.route.snapshot.params['name'];
    console.log(this.medicineName);
    this.getProductByName();
   
 
}

  


getProductByName() {
  this.userService.getMedicineByName(this.medicineName).subscribe({
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
addToWishlist(product: Product) {
  const wishlistItem = new WishlistItem(product);
  this.wishlistservice.addToWishlist(wishlistItem);
 
}
addToCart(product: Product) {
  const cartItem = new CartItem(product);
  this.cartservice.addToCart(cartItem);
 
}

}
