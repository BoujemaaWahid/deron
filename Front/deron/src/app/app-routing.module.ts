import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './authentication/register/register.component';
import { DirtyFields } from './Guards/Deactivation';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './authentication/login/login.component';
import { ValidationComponent } from './authentication/register/validation/validation.component';
import { ValidationGuard } from './Guards/Activation';


const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: AuthenticationComponent, children:[
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, canDeactivate:[DirtyFields], data: { animation: 'isLogin'}},
    {path: 'register', component: RegisterComponent, canDeactivate:[DirtyFields], data: { animation: 'isRegister'}}
  ]},
  {path: 'validation/:signature', component: ValidationComponent, canActivate:[ValidationGuard], data:{animation: 'isValidation'}},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
