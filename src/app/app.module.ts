import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { DirtyFields } from './Guards/Deactivation';
import { NotfoundComponent } from './notfound/notfound.component';
import { ValidationComponent } from './authentication/register/validation/validation.component';
import { FocusPulseDirective } from './directives/focus-pulse.directive';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { QRCodeModule } from 'angularx-qrcode';
import { ValidationGuard } from './Guards/Activation';
import { IndexedDbService } from './services/indexed-db.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    ValidationComponent,
    FocusPulseDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng2IziToastModule,
    QRCodeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [IndexedDbService, DirtyFields, ValidationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
