import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieInterceptorService } from './services/cookie-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _cookieInterceptorService : CookieInterceptorService,
    private _router : Router
  ){}

  canActivate(){
    
    if(this._cookieInterceptorService.getCookie("mysecretcookie")){
      return true;
    }

    return this._router.navigate(["/signup"]);
  }
  
}
