import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 selectfile!:any
 uploadfile:any
 
  constructor(private service:ServiceService,private httpclient:HttpClient,private router:Router) { }
 
  ngOnInit(): void {
    
    //console.log(this.pages.page)
  }
 
  pages=[  "home","service" ]
postt = new UntypedFormGroup({
  description:new UntypedFormControl(),
  title: new UntypedFormControl(),
 // myfile: new UntypedFormControl(),
  pag : new UntypedFormControl()

})
 

  Kidupload(event:any){
    
   
    if(event.target.files && event.target.files[0]){
      this.selectfile = <File> event.target.files[0]
      const formdata = new FormData()
      formdata.append('file',this.selectfile)
      formdata.append('title',this.postt.get('title')?.value)
      formdata.append('description',this.postt.get('description')?.value)

      //this.mygetdata(this.pages)
     //console.log('pag',this.postt.get('pag')?.value)
            
     if(this.postt.get('pag')?.value == "home"){
      this.httpclient.post('http://localhost:3000/api/upload',formdata).subscribe(data=>{
           this.uploadfile= data
         })
       }else if(this.postt.get('states')?.value == "service"){
        this.Submit()
            }
          }
        }

  Submit(){
    //this.service.imgpost('')

    let ccontent = this.postt.get('description')?.value
    
    this.service.smmrypost(this.postt.value).subscribe(data=>{
      this.uploadfile = data
      
     
    })

  }

About = new FormGroup({
  title:new FormControl(),
  aboutme:new FormControl(''),
  email: new FormControl(''),
  phone:new FormControl(),
  facebook: new FormControl(''),
  twitter:new FormControl('')
})

aboutresault:any

  aboutfun(){
    this.service.about(this.About.value).subscribe(res=>{
    this.aboutresault =res
    })
  }
  logout(){
    this.service.deleteToken()
    this.router.navigateByUrl('/login')
  }


}
