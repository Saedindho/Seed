import { Component,Directive, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormGroupDirective} from '@angular/forms';
//import { Router } from 'express';
import {ActivatedRoute, Router} from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 mytoken:any=[]
 tooken:any
  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  
  login = new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  
  })

  loginto(){
    if(!this.login.value){
      console.log("this user or password is not valid")
    }else{
      this.service.login(this.login.value).subscribe(
        res=>{
          var data = res as {[key: string]: any}['token']
          var mydata = data.token
          console.log(data.token)
          this.service.setToken(mydata)
          this.mytoken = mydata
          
          if(!this.mytoken){
                console.log("this user is not correct")
          }else{
            var userpayload = this.service.getuserpayload()
            console.log(userpayload)
            if(userpayload.role =="admin"){
             this.router.navigateByUrl('/table')
            }else{
              this.router.navigateByUrl('/admin')
            }
          }
        }
      )
    }

    
  }

  
}
