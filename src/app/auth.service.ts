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

  public getUserId = localStorage.getItem('USER_ID')

  public login(userInfo: User) {
    return this.http.post(`${this.__apiUrl}/users/login`, userInfo);
  }

  public getUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.__apiUrl}/users/${this.getUserId}`)
  }


  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('USER_ID');
    localStorage.removeItem('USER_EMAIL');
  }


  public getCards() {
    return this.http.get(`${this.__apiUrl}/cards/all`)

  }
  public register(userInfo: User) {
    return this.http.post(`${this.__apiUrl}/users/register`, userInfo);
  }


  public getuser(userInfo: User) {
    return this.http.get(`${this.__apiUrl}/users/${userInfo._id}`);
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