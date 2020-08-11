import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req, next){
    
    const signature = req.clone({
      setHeaders: {
        'signature': '284a7215bd337000fb86221a2b83cabb'
      }
    });

    return next.handle(signature);
  }
}
