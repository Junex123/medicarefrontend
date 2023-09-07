import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WishlistItem } from '../Class/wishlist-item';



@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlistItems: WishlistItem[] = [];
  totalPrice2: Subject<number> = new Subject<number>();
  totalQuantity2: Subject<number> = new Subject<number>();

  constructor() { }

  addToWishlist(thewishlistitem: WishlistItem) {
    //check if the cart item is already in the cart
    let alreadyInCart: boolean = false;
    let existingCartItem: WishlistItem | undefined = undefined;

    if (this.wishlistItems.length > 0) {
      //find the cart item based on the id
      existingCartItem = this.wishlistItems.find((item) => item.pid === thewishlistitem.pid);

      //check if the cart item is found
      alreadyInCart = (existingCartItem != undefined);
    }

    if (alreadyInCart) {
      //increase the quantity
      existingCartItem!.quantity++;
    } else {
      this.wishlistItems.push(thewishlistitem);
      console.log(this.wishlistItems);
    }
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.wishlistItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.price;
      totalQuantityValue += currentCartItem.quantity;
    }
    console.log(`Total price: ${totalPriceValue}, Total quantity: ${totalQuantityValue}`);
    this.totalPrice2.next(totalPriceValue);
    this.totalQuantity2.next(totalQuantityValue);
  }

  decrementQuantity(wishlistitem: WishlistItem) {
    wishlistitem.quantity--;
    if (wishlistitem.quantity === 0) {
      this.remove(wishlistitem);
    } else {
      this.calculateTotalPrice();
    }
  }

  remove(wishlistitem: WishlistItem) {
    const itemIndex = this.wishlistItems.findIndex(tempCartItem => tempCartItem.pid === wishlistitem.pid);
    if (itemIndex > -1) {
      this.wishlistItems.splice(itemIndex, 1);
      this.calculateTotalPrice();
    }
  }




}
