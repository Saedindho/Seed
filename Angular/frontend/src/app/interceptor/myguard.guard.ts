import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class MyguardGuard implements CanActivate {
  constructor(private service:ServiceService,private router:Router){}
  canActivate(
   next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean  {
      if(!this.service.isLogedIn()){
        this.router.navigateByUrl('/login')
        this.service.deleteToken()
        return false
      }
    return true;
  }
  
}
