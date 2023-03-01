import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

export class about{

  constructor(
public title:string,
public aboutme:string,
public email:string,
public phone:Number,
public facebook:String,
public twitter : String

  ){}
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})



export class AboutComponent implements OnInit {
  About:about[]
  varabout:any
  varabout1:any
  visible!:boolean
  mypayload:any
  constructor(private service:ServiceService) { 
    this.About =[]
  }

  ngOnInit(): void {
   this.mypayload = this.service.getuserpayload()
   if(this.mypayload.role == "admin" || this.mypayload.role == "regular"){
    this.visible = true
   }else{
    this.visible = false
   }
  this.service.getabout().subscribe(
    res=>{
      this.About = res as {[key:string]:any} ['about']
      this.varabout = this.About
      this.varabout1 = this.varabout.about
      console.log(this.varabout1)

    }
  )

  }
  panelOpenState = false;
}
