//tslint:disable
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  IDT
} from '../../interfaces/IDT';
import Notiflix  from 'notiflix';
declare var $: any;
export class LoginForm extends IDT {
  public loginForm: FormGroup;
  private formBuilder: FormBuilder;
  constructor() {
    super()
    this.formBuilder = new FormBuilder();
    this.loginForm = this.formBuilder.group({
      identifiant: ['', Validators.required],
      password: ['', Validators.required]
    })
    if( $("#identifiant").is(':focus') ){
      $("#identifiant").toggleClass('pulsed')
    }
  }
  public VDT(e) {
    return this.IDT(this.loginForm, e)
  }
  public exitLoginGuard(): Promise < boolean > {

    return new Promise(resolve => {
      if (this.loginForm.get('identifiant').value == '' && this.loginForm.get('password').value == '') resolve(true);
      else {
        Notiflix.Confirm.Show(
          'Quitter cette page ?', 'Vous voulez pas continuer votre connection ?', 'continuer', 'quitter',
          () => {
            resolve(false)
          }, () => {
            resolve(true)
          },
        );
      }
    })
  }
}
export class RegisterForm extends IDT {
  public registerForm: FormGroup;
  private formBuilder: FormBuilder;
  constructor() {
    super();
    this.formBuilder = new FormBuilder();
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', Validators.required]
    })
  }
  public VDT(e) {
    return this.IDT(this.registerForm, e)
  }
  public exitRegisterGuard(): Promise < boolean > {

    return new Promise(resolve => {
      if (
          this.registerForm.get('email').value == '' &&
          this.registerForm.get('username').value == ''&&
          this.registerForm.get('password').value == ''&&
          this.registerForm.get('phone').value == ''
          ) resolve(true);
      else {
        Notiflix.Confirm.Show(
          'Quitter cette page ?', 'Vous voulez pas continuer votre inscription ?', 'continuer', 'quitter',
          () => {
            resolve(false)
          }, () => {
            resolve(true)
          },
        );
      }
    })
  }
}
export function animeConfirmMail(): any{
  Notiflix.Loading.Init({messageID: 'message_email_conf', messageMaxLength: 200, svgColor: '#428bca',messageFontSize: '20px'})
  Notiflix.Loading.Dots('Un email vous sera envoyé pour la confirmation de votre adresse.');
  $("#message_email_conf").css({'max-width':'65%'})
  return Notiflix.Loading;
}