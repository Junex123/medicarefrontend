import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-purchasereport',
  templateUrl: './purchasereport.component.html',
  styleUrls: ['./purchasereport.component.css']
})
export class PurchasereportComponent implements OnInit{
  orders: any[] = [];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUserOrders();
  }

  getAllUserOrders() {
    this.userService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data;
      }, error: (error) => {
        console.log(error);
        alert('No Order found');
      }
    })
  }

  getOrderDetails(oid: number) {
    let url = '/orderdetails/' + oid;
    this.router.navigateByUrl(url);
  }

  deleteOrder(oid: number) {
    this.userService.deleteOrder(oid).subscribe({
      next: (data) => {
        this.getAllUserOrders();
      }, error: (error) => {
        console.log(error);
      }
    })
  }



}
