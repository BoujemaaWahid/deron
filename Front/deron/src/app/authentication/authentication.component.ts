import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './route-animation';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  animations: [slider]
})
export class AuthenticationComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
}
