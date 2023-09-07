import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/Class/cart-item';
import { Product } from 'src/app/Class/product';
import { CartService } from 'src/app/Services/cart.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent {
  medicineName!: string;
  name!: string;
  product!: Product[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  constructor(private route: ActivatedRoute, private userService: UserService, private cartService: CartService, private router: Router) {
  }
  ngOnInit(): void {
 
  this.route.paramMap.subscribe((params:any) => {
    this.medicineName = params.get("name")
    this.getProductByName();
  })
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

onTableDataChange(event: any) {
  this.page = event;
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
  addToCart(product: Product) {
    const cartItem = new CartItem(product);
    this.cartService.addToCart(cartItem);
  }
}
