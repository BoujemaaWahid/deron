import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoutesMap } from './RoutesMap';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly secret_key = "BW.CAT";

  constructor(private http: HttpClient) { }
  
  public register(data: any){
    return this.http.post(RoutesMap.REGISTER, data, {headers:{'Content-Type':'application/json'}, responseType: "text"})
  }

  public validateAccount(data: any){
    return this.http.post(RoutesMap.VALIDATION, data, {headers:{'Content-Type':'application/json'}, responseType: "text"})
  }

  public login(data: any){
    return this.http.post(RoutesMap.LOGIN, data, {headers:{'Content-Type':'application/json'}, responseType: "text"})
  }

  public test(){
    return this.http.get("http://localhost:8080/deron/auth/ok", {responseType: "text"})
  }

}
