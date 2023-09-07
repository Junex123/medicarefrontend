import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/Class/cart-item';
import { Product } from 'src/app/Class/product';
import { CartService } from 'src/app/Services/cart.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.css']
})
export class AllcategoryComponent {
  constructor(private route: ActivatedRoute, 
    private userService: UserService, private cartService: CartService,
     private router: Router) {

  }
  name!: string;
  medicine: string[] = ['Anti Hypertensives', 'Anti Diabetic', 'Gastro Intestinal', 'Urology', 'Anti Infectives', 'Gynaecological', 'Analgesics', 'Vitamins'];
  category!: string;
  product!: Product[];
  
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
 
  ngOnInit(): void {
    
    
    this.route.paramMap.subscribe((params:any) => {
      this.category = params.get("category")
      this.showMedicineByCategory();
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
  }



  showMedicineByCategory() {
    if (this.category == 'All-Medicines') {
      this.userService.getAllMedicine().subscribe({
        next: (data) => {
          this.product = data;
          this.product.forEach((p) => {
            p.img = 'data:image/jpeg;base64,' + p.productImage.imageData;
          })
        }
      })

    } else {
      this.userService.getMedicineByCategory(this.category).subscribe({
        next: (data) => {
          this.product = data;
          this.product.forEach((p) => {
            p.img = 'data:image/jpeg;base64,' + p.productImage.imageData;
            
          })
        }
      })

    }
  }

  onSearch(name: string) {
    if (name != undefined) {
      console.log('navigating to search url');
      let url = "/user/search/product/" + name;
      this.router.navigateByUrl(url);
    } else {
      console.log('please enter a name');
    }
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
