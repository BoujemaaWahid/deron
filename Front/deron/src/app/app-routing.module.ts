import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './authentication/register/register.component';
import { DeacGuard } from './Guards/DeacGuard';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './authentication/login/login.component';
import { ValidationComponent } from './authentication/register/validation/validation.component';


const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: AuthenticationComponent, children:[
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, canDeactivate:[DeacGuard], data: { animation: 'isLogin'}},
    {path: 'register', component: RegisterComponent, canDeactivate:[DeacGuard], data: { animation: 'isRegister'}}
  ]},
  {path: 'validation', component: ValidationComponent, data:{animation: 'isValidation'}},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
