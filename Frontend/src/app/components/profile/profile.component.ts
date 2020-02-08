import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private _registerService : RegisterService
  ) { }

  ngOnInit() {
  }

  Name : string;

  profile(){
    this._registerService.profile()
      .subscribe(res => console.log(res));
  }

}
