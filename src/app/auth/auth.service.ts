import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:8080/rest/utente';
  isLoggedIn: boolean = true;
  isAdmin: boolean = true;

  constructor(private http: HttpClient) { }

  signIn(mail: string, password: string) {
    return this.http.get(this.url + '/signIn?mail=' + mail + '&password=' + password);
  }

  signUp(body: {}) {
    return this.http.post(this.url + '/createOrUpdate', body);
  }
  
  setAuthenticated() {
    this.isLoggedIn = true;
  }

  setLoggedOut() {
    this.isLoggedIn = false;
  }

  setRoleAdmin() {
    this.isAdmin = true;
  }

  setRoleUser() {
    this.isAdmin = false;
  }
 
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  isRoleAdmin(): boolean {
    return this.isAdmin;
  }
}
