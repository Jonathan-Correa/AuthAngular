import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/register/signup/signup.component';
import { SigninComponent } from './components/register/signin/signin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { 
    path : "signup", 
    component : SignupComponent
  },
  {
    path : "signin",
    component : SigninComponent
  },
  {
    path : "profile",
    component : ProfileComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
