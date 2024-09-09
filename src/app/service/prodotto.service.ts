import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  url: string = 'http://localhost:8080/rest/prodotto';

  constructor(private http: HttpClient) { }

  createOrUpdateProdotto(body: {}) {
    return this.http.post(this.url + '/createOrUpdate', body);
  }

  removeProdotto(body: {}) {
    return this.http.post(this.url + '/remove', body);
  }

  getProdottoById(id: number) {
    return this.http.get(this.url + '/searchById?id=' + id);
  }

  getAllProdotti() {
    return this.http.get(this.url + '/listAll');
  }
}
