import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Class/user';
import { UserlistserviceService } from 'src/app/Services/userlistservice.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  @Input() viewMode = false;

  @Input() currentTutorial: User = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    userId: 0,
    password: ''
  };

  message = '';
  
  users?: User[];
  currentUser: User = {
    userId: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: ''
  };
  currentIndex = -1;
  username= '';
  firstName='';
  lastName='';
  email= '';
  contactNumber='';
  
  constructor(
    private tutorialService: UserlistserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  

  
  ngOnInit(): void {
    this.retrieveTutorials();
    
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll().subscribe({
      next: (data) => {
        this.users = data;
        
        console.log(data);
        console.log(this.users);
      },
      error: (e) => console.error(e)
    });
  }


  deleteEmpInfo(pid:number)
  {
    let ch = confirm("Are you sure you want to delete");
    if(ch==true)
    {
      this.tutorialService.delete(pid).subscribe(data=>{
        this.retrieveTutorials();
      });
    }
  }

 


 
  }

