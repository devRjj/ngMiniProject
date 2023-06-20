import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path: 'register', component:RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'userlist', component: UserlistComponent},
  {path: 'userlist/user-details/:id', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
