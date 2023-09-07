import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contactus } from 'src/app/Class/contactus';
import { ContactusService } from 'src/app/Services/contactus.service';


@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent {
  constructor(private userService: ContactusService, private router: Router) {
    this.getAllcontactus();
  }
  product!: Contactus[];
 
  


  getAllcontactus() {
    this.userService.getAll().subscribe({
      next: (data) => {
        this.product = data;
        this.product.forEach((p) => {
         
        })
      }, error: (error) => {
        console.log(error);
        alert('No list found');
      }
    })
  }
  deletecontactus(id: number) {
    let ch = confirm("Are you sure you want to delete");
    if(ch==true){
    this.userService.delete(id).subscribe({
      next: (data) => {
        this.getAllcontactus();
      }, error: (error) => {
        console.log(error);
      }
    })
  }
}}