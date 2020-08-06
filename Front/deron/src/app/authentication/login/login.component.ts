import { Component } from '@angular/core';
import { LoginForm } from '../Handler';
import { Router, ActivatedRoute } from '@angular/router';
import { Deactivator } from '../../Guards/DeacGuard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements Deactivator{
  loginForm: LoginForm;
  focusd = false;
  focusPwd = false;
  constructor(private route: Router, private activatedRoute: ActivatedRoute) { 
    this.loginForm = new LoginForm()
  }
  async confirm(): Promise<boolean> {
    return await this.loginForm.exitLoginGuard();
  }
  toRegister(){
    this.route.navigate(['register'], {relativeTo: this.activatedRoute.parent})
  }

}
