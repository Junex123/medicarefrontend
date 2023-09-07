import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Sanitizer } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Class/product';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  constructor(private userService: UserService, private router: Router) { }

  product: Product = new Product();
  file!: Blob;
  isValid!: boolean;
  message!: string;

  onSubmit() {
    this.userService.addMedicine(this.product, this.file).subscribe({
      next: (response) => {
        this.isValid = true;
        this.message = "Medicine added successfully!"

      }, error: (error) => {
        this.isValid = false;
        this.message = 'Something went wrong!'
      }
    })
  }

  onChangeFileField(event: any) {
    this.file = event.target.files[0];
  }

  onClick() {
    this.router.navigate(['/admin-dashboard']);
  }

}
