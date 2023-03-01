import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Parser } from '@angular/compiler';
import { content}  from  './content/content.component'
import {mytables} from './contenttable/contenttable.component'
import { about } from './about/about.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpclient:HttpClient) { }

  register(body:any){
    return this.httpclient.post('http://localhost:3000/api/register',body)
  }
  login(body:any){
    return this.httpclient.post('http://localhost:3000/api/login',body)
  }
  /*
  imgpost(body:any){
    return this.httpclient.post('http://localhost:3000/api/upload',body)
  }
  */
  smmrypost(body:any){
    return this.httpclient.post('http://localhost:3000/api/sumery',body)
  }

  about(body:any){
    return this.httpclient.post('http://localhost:3000/api/about',body)
  }

  //GET CONTENTS

  content(){
    return this.httpclient.get<content[]>('http://localhost:3000/api/content')
  }
  imgespost(){
    return this.httpclient.get<mytables[]>('http://localhost:3000/api/imges')
  }

 getabout(){
  return this.httpclient.get<about[]>('http://localhost:3000/api/aboutus')
 }

 delete(imgid:any){
  return this.httpclient.delete('http://localhost:3000/api/deleteimg/'+imgid)
}
deletecon(contid:any){
  return this.httpclient.delete('http://localhost:3000/api/deletecn/'+contid)
}
deleteAb(Ab_id:any){
 return this.httpclient.delete('http://localhost:3000/api/deleteabout/'+Ab_id)
}

setToken(token:string){
  localStorage.setItem('token',token)
}
getToken(){
  return localStorage.getItem('token')
}
isLogedIn(){
  var myuserpayload = this.getuserpayload();
  if(myuserpayload){
    return myuserpayload.exp > Date.now()/1000;
  }else{
    return null
  }
}

deleteToken(){
  return localStorage.removeItem('token')
}


getuserpayload(){
  var token = this.getToken()

  if(!token){
  var message="this user or password is not valid"
  return message
  }else{
    var data =token.split('.')[1]
    var payloadtoken = atob(data);
   
    //console.log(payloadtoken)
    return JSON.parse(payloadtoken)
  }

}
/*
pages(){
   return [
   {page:"home"},
   {page:"service"}
  ]


}
*/
}
