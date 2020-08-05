import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './authentication/register/register.component';
import { DeacGuard } from './DeacGuard';
import { NotfoundComponent } from './notfound/notfound.component';
import { InscriptionComponent } from './authentication/register/inscription/inscription.component';
import { LoginComponent } from './authentication/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: AuthenticationComponent, children:[
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, canDeactivate:[DeacGuard], data: { animation: 'isLogin'}},
    {path: 'register', component: RegisterComponent, canDeactivate:[DeacGuard], data: { animation: 'isRegister'}}
  ]},
  {path: 'validation', component: InscriptionComponent, data:{animation: 'isInscription'}},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
