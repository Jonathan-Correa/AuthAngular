import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { RegisterService } from '../../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm : FormGroup;

  constructor(
    private _fb : FormBuilder,
    private _registerService : RegisterService,
    private _router : Router
  ) { 
    this.userForm = this._fb.group({
      name : [""],
      lastName : [""],
      email : [""],
      password : [""]
    });
   }

   signup(form: any){
     this._registerService.signup(form.value)
      .subscribe(res => this._router.navigate(["/profile"]));
   }
  

  ngOnInit(
  ) {
  }

}
