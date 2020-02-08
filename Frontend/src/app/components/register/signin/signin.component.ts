import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { RegisterService } from '../../../services/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userForm : FormGroup;

  constructor(
    private _fb : FormBuilder,
    private _registerService : RegisterService,
    private _router : Router
  ) { 
    this.userForm = this._fb.group({
      email : [""],
      password : [""]
    });
   }
  
  signin(form: any){
    this._registerService.signin(form.value)
      .subscribe(res =>  this._router.navigate(["/profile"]));
  }

  ngOnInit() {
  }

}
