import { Component } from '@angular/core';
import { RegisterForm, animeConfirmMail } from '../Handler';
import { ActivatedRoute, Router } from '@angular/router';
import { Deactivator } from '../../Guards/Deactivation';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements Deactivator {
  registerForm: RegisterForm;
  isLoading = false;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    this.registerForm = new RegisterForm();
  }

  async confirm(): Promise<boolean> {
    return await this.registerForm.exitRegisterGuard()
  }
  toLogin(){
    this.router.navigate(['login'], {relativeTo: this.activatedRoute.parent});
  }
  createAccount(){
    this.isLoading = true
    let loading = animeConfirmMail()
    setInterval(()=>{loading.Change('Vasy')}, 4000)
  }
}
