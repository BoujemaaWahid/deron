import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './authentication/register/register.component';
import { DirtyFields } from './Guards/Deactivation';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './authentication/login/login.component';
import { ValidationGuard } from './Guards/Activation';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: AuthenticationComponent, children:[
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, canDeactivate:[DirtyFields], data: { animation: 'isLogin'}},
    {path: 'register', component: RegisterComponent, canDeactivate:[DirtyFields], data: { animation: 'isRegister'}}
  ]},
  {path: 'profile', component: ProfileComponent, data:{animation: 'isProfile'}},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
