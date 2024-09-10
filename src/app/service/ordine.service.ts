import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdineService {

  url: string = 'http://localhost:8080/rest/ordine';

  constructor(private http: HttpClient) { }

  createOrdine(body: {}) {
    return this.http.post(this.url + '/create', body);
  }

  updateOrdine(body: {}) {
    return this.http.post(this.url + '/update', body);
  }

  getOrdine(id: number, stato: string) {
    return this.http.get(this.url + '/list?id=' + id + '&stato=' + stato);
  }

  addProdottoOrdine(body: {}) {
    return this.http.post(this.url + '/addProd', body);
  }

  removeProdottoOrdine(body: {}) {
    return this.http.post(this.url + '/removeProd', body);
  }
  
}
