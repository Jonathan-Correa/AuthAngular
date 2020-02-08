import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { CookieInterceptorService } from 'src/app/services/cookie-interceptor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _registerService : RegisterService,
    private _cookieInterceptorService : CookieInterceptorService,
    private _router : Router
  ) { }

  isLogged(){
    return this._cookieInterceptorService.getCookie("mysecretcookie");
  }

  logout(){
    return this._registerService.signout()
      .subscribe(res => this._router.navigate(["/signin"]));
  }

  ngOnInit() {
  }

}
