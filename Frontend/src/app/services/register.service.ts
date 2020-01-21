import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private _http : HttpClient
  ) { }

  readonly API_URI : string = 'http://localhost:3000/api';

  signup(form){

    return this._http.post(`${this.API_URI}/users/signup`, form,{
      observe : "body",
      withCredentials : true,
      headers : new HttpHeaders().append('content-type', 'application/x-www-form-urlencoded')
    });
  }
}
