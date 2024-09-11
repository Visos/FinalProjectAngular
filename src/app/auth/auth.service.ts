import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:8080/rest/utente';
  isLogged: boolean = false;
  isAdmin: boolean = false;

  constructor(private http: HttpClient) { 
    console.log("init AuthService")
    if(localStorage.getItem("isLogged")){ 
      console.log("Token exists" + localStorage.getItem("isLogged")) 
      if(localStorage.getItem("isLogged") == "0"){
        this.isLogged = false
      } else{
        this.isLogged = true
        if(localStorage.getItem("isAdmin") == "1"){
          this.isAdmin = true
        } else{
          this.isAdmin = false
        }
      }

    } else { 
      console.log("Token does not exist") 
      localStorage.setItem("isLogged", "0") 
      localStorage.setItem("isAdmin", "0")

      }
    }

  signIn(mail: string, password: string) {
    return this.http.get(this.url + '/signIn?mail=' + mail + '&password=' + password);
  }

  signUp(body: {}) {
    return this.http.post(this.url + '/createOrUpdate', body);
  }

  signOut() {
    localStorage.setItem('isLogged', '0');
    localStorage.setItem('isAdmin', '0');
    this.isLogged = false;
  }
  
  setAuthenticated() {
    localStorage.setItem('isLogged', '1');
    this.isLogged = true;
  }

  setRoleAdmin() {
    localStorage.setItem('isAdmin', '1');
    this.isAdmin = true;
  }

  setRoleUser() {
    localStorage.setItem('isAdmin', '0');
    this.isAdmin = false;
  }
 
  isAuthenticated(): boolean {
    return this.isLogged;
  }

  isRoleAdmin(): boolean {
    return this.isAdmin;
  }
}
