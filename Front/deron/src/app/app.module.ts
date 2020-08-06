import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { DeacGuard } from './Guards/DeacGuard';
import { NotfoundComponent } from './notfound/notfound.component';
import { ValidationComponent } from './authentication/register/validation/validation.component';
import { FocusPulseDirective } from './directives/focus-pulse.directive';
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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DeacGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
