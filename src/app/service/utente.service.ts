import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  url: string = 'http://localhost:8080/rest/utente';

  constructor(private http: HttpClient) { }

  createOrUpdateUtente(body: {}) {
    return this.http.post(this.url + "/createOrUpdate", body);
  }

  getUtenteById(id: number) {
    return this.http.get(this.url + "/searchById?id=" + id);
  }

  getUtenteByMail(mail: string) {
    return this.http.get(this.url + "/searchByMail?mail=" + mail);
  }

  getAllUtenti() {
    return this.http.get(this.url + "listAll");
  }


}
