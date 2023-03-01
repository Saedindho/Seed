import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ServiceService } from '../service.service';
import { Router,ActivatedRoute } from '@angular/router';



@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private service:ServiceService,private router:Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if(req.headers.get('noauth')){
      return next.handle(req.clone())
    }else{
      const clonereq = req.clone({
        headers:req.headers.set('Authorization',"Bearer"+this.service.getToken())
      })
      return next.handle(clonereq).pipe(
        tap<any>(
          check=>{
            console.log("sucess")
          },
          err=>{
            if(err.error.auth==false){
              this.router.navigateByUrl('/login')
            }
          }
        )
      )
    }
    return next.handle(req);
  }
}
