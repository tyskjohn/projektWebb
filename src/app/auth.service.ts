import { Injectable } from '@angular/core';
//import { User } from './user';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  __apiUrl: string = "http://localhost:3001/api";

   constructor(private http: HttpClient) { }

   public login(userInfo: User) {
    return this.http.post(`${this.__apiUrl}/users/login`, userInfo);
  }

  public register(userInfo: User) {
    return this.http.post(`${this.__apiUrl}/users/register`, userInfo);
  }
}
export interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  addressline: string;
  city: string;
  country: string;
  zipcode: string;
}