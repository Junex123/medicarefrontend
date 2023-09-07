import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Contactus } from 'src/app/Class/contactus';
import { ContactusService } from 'src/app/Services/contactus.service';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  constructor(private userService: ContactusService, private router: Router) { }

  product: Contactus = new Contactus();
  file!: Blob;
  isValid!: boolean;
  message!: string;

  onSubmit() {
    this.userService.create(this.product).subscribe({
      next: (response) => {
        this.isValid = true;
        alert('Message added successfully');
       

      }, error: (error) => {
        this.isValid = false;
        this.message = 'Something went wrong!'
      }
    })
  }
 

}
