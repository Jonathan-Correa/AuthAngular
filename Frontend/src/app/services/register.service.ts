import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private _http : HttpClient
  ) { }

  readonly API_URI : string = 'http://localhost:3000/api';

  signup(form: any){

    return this._http.post(`${this.API_URI}/users/signup`, form,{
      observe : "body",
      withCredentials : true,
      headers : new HttpHeaders().append('content-type', 'application/json')
    });
  }

  signin(form: any){

    return this._http.post(`${this.API_URI}/users/signin`, form,{
      observe : "body",
      withCredentials : true,
      headers : new HttpHeaders().append('content-type', 'application/json')
    });
  }

  signout(){
    return this._http.get(`${this.API_URI}/users/signout`);
  }

  profile(){
    return this._http.get(`${this.API_URI}/profile`);
  }
}
