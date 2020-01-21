import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm : FormGroup;

  constructor(
    private _fb : FormBuilder,
    private _registerService : RegisterService
  ) { 
    this.userForm = this._fb.group({
      name : [""],
      lastName : [""],
      email : [""],
      password : [""]
    });
   }

   signup(form){
     console.log(form);
     this._registerService.signup(JSON.stringify(form))
      .subscribe(res => console.log(res));
   }
  

  ngOnInit(
  ) {
  }

}
