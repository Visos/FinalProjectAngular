import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  url: string = 'http://localhost:8080/rest';

  constructor(private http: HttpClient) { }

  // Camicia
  createOrUpdateCamicia(body: {}) {
    return this.http.post(this.url + '/camicia/createOrUpdate', body);
  }

  getByIdCamicia(id: number) {
    return this.http.get(this.url + '/camicia/searchById?id=' + id);
  }

  getAllCamicia() {
    return this.http.get(this.url + '/camicia/listAll');
  }
  // Pantalone
  createOrUpdatePantalone(body: {}) {
    return this.http.post(this.url + '/pantalone/createOrUpdate', body);
  }

  getByIdPantalone(id: number) {
    return this.http.get(this.url + '/pantalone/searchById?id=' + id);
  }

  getAllPantalone() {
    return this.http.get(this.url + '/pantalone/listAll');
  }

  // Vestito
  createOrUpdateVestito(body: {}) {
    return this.http.post(this.url + '/vestito/createOrUpdate', body);
  }

  getByIdVestito(id: number) {
    return this.http.get(this.url + '/vestito/searchById?id=' + id);
  }

  getAllVestito() {
    return this.http.get(this.url + '/vestito/listAll');
  }

  // Maglietta
  createOrUpdateMaglietta(body: {}) {
    return this.http.post(this.url + '/maglietta/createOrUpdate', body);
  }

  getByIdMaglietta(id: number) {
    return this.http.get(this.url + '/maglietta/searchById?id=' + id);
  }

  getAllMaglietta() {
    return this.http.get(this.url + '/maglietta/listAll');
  }

  // Scarpa
  createOrUpdateScarpa(body: {}) {
    return this.http.post(this.url + '/scarpa/createOrUpdate', body);
  }

  getByIdScarpa(id: number) {
    return this.http.get(this.url + '/scarpa/searchById?id=' + id);
  }

  getAllScarpa() {
    return this.http.get(this.url + '/scarpa/listAll');
  }

}
