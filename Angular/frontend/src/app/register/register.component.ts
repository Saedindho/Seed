import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private service:ServiceService,private router:Router) { }

  response:any

  ngOnInit(): void {
  }
  register = new FormGroup({
     firstname:new FormControl(''),
     lastname : new FormControl(''),
     email:    new FormControl(''),
     password : new FormControl('')
  })
 isActive = false;

 myregister(){
   this.service.register(this.register.value).subscribe(
    res=>{
       this.response = res
       this.router.navigateByUrl('/login')
    },
    err=>{
     if(err.error.status==201){
      console.log("this user is not registered")
     }
    }
   )
 }
}
