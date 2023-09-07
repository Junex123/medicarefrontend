import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Class/product';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  constructor(private userService: UserService, private router: Router) {
    this.getAllProducts();
  }
  product!: Product[];
  medicineName!: string;
  prod: Product = new Product();
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
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
  getProductByName() {
    this.onTableDataChange(this.event);
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

  getProductByCategory(category: string) {
    this.onTableDataChange(this.event);
    this.userService.getMedicineByCategory(category).subscribe({
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


  deleteProduct(pid: number) {
    this.userService.deleteMedicine(pid).subscribe({
      next: (data) => {
        this.getAllProducts();
      }, error: (error) => {
        console.log(error);
      }
    })
  }
  updateProduct(pid: number) {
    let url = "/updateproduct/" + pid;
    this.router.navigateByUrl(url);
  }
  onClick() {
    window.location.reload();
  }
  onActivate(pid: number, p: Product) {
    this.prod = p;
    this.userService.setAvailable(pid, this.prod).subscribe({
      next: (data) => {

      }, error: (error) => {
        console.log(error);
      }
    })
  }
}