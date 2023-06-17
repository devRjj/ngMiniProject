import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path: 'register', component:RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'userlist', component: UserlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
