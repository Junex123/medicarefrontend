import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent {
  username!: string;
  serialNumber!: any;
  orders: any[] = [];
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    this.getAllOrders();
    this.assignSerialNumbers();
  }

  getAllOrders() {
    this.userService.getOrderByUsername(this.username).subscribe({
      next: (data) => {
        this.orders = data;
      }, error: (error) => {
        console.log(error);
        alert('No Orders found');
      }
    })
  }
  getOrderDetails(oid: number) {
    let url = '/orderdetail/' + oid;
    this.router.navigateByUrl(url);
  }
  private assignSerialNumbers(): void {
    for (let i = 0; i < this.orders.length; i++) {
      this.orders[i].serialNumber = i + 1;
    }
  }


}
