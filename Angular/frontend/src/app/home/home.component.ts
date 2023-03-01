import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images:any
  myimages:any
  visible!:boolean;
  constructor(private service:ServiceService) { }
    mypayload:any
  ngOnInit(): void {

   this.mypayload = this.service.getuserpayload()
   if(this.mypayload.role == "admin" || this.mypayload.role == "regular"){
      this.visible =true
   }else{
    this.visible =false
   }
   this.service.imgespost().subscribe(res=>{
    this.myimages = res as {[key:string]:any} ['doc']
    console.log(this.myimages)
    this.images = this.myimages.doc
   })
  }

}
