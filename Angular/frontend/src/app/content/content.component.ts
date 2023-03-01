import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { AdminComponent } from '../admin/admin.component';
export class content{
  constructor(
       public title:string,
       public  description:string
  ){}
}
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [AdminComponent]
})



export class ContentComponent implements OnInit {

  mycontent:any
  mycontent1:any
  constents:content[]
  myvalue!: any[];
  coontents:any
  ridwanone:any
  check:any

  constructor(private service:ServiceService,private myservice:AdminComponent,private router:Router) { 

   this.constents=[]
  }
   
  visible!:boolean;
  mpayload:any
  ngOnInit(): void {
    
    this.mpayload = this.service.getuserpayload()
    if(this.mpayload.role == "admin" || this.mpayload.role == "regular"){
      this.visible =true
    }else{
      this.visible =false
    }
    this.mycontent =  this.myservice.postt.get('title')?.value
    this.mycontent1 =  this.myservice.postt.get('description')?.value
     console.log(this.mycontent)
   this.service.content().subscribe(
    res=>{
           //  this.constents = res as {[key: string]: any} ['doc']

          this.coontents = JSON.stringify(res as {[key: string]: any} ['doc'])
          //empArray.forEach(item => obj[item.id] = item.name);  
          //this.coontents.forEach((item: { id: string | number; declarations: any; })=>[item.id]=item.declarations)
          // this.myvalue = this.constents.json() || {}
            //return JSON.parse(myvalue)
           // document.getElementById("demo").innerHTML
            this.ridwanone = JSON.parse(this.coontents)
           
            this.check =  this.ridwanone.doc
            console.log(this.ridwanone.doc)
       //console.log(this.coontents)
     
             
    }
   )
  }

}
