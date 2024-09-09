import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  url: string = 'http://localhost:8080/rest';

  constructor(private http: HttpClient) { }


  createOrUpdateVestibilita(body: {}) {
    return this.http.post(this.url + '/vestibilita/createOrUpdate', body);
  }

  getByIdVestibilita(id: number) {
    return this.http.get(this.url + '/vestibilita/searchById?id=' + id);
  }

  getAllVestibilita() {
    return this.http.get(this.url + '/vestibilita/listAll');
  }

  createOrUpdateChiusura(body: {}) {
    return this.http.post(this.url + '/chiusura/createOrUpdate', body);
  }

  getByIdChiusura(id: number) {
    return this.http.get(this.url + '/chiusura/searchById?id=' + id);
  }
  
  getAllChiusura() {
    return this.http.get(this.url + '/chiusura/listAll');
  }

  createOrUpdateColore(body: {}) {
    return this.http.post(this.url + '/colore/createOrUpdate', body);
  }

  getByIdColore(id: number) {
    return this.http.get(this.url + '/colore/searchById?id=' + id);
  }
  
  getAllColore() {
    return this.http.get(this.url + '/colore/listAll');
  }

  createOrUpdateFantasia(body: {}) {
    return this.http.post(this.url + '/fantasia/createOrUpdate', body);
  }

  getByIdFantasia(id: number) {
    return this.http.get(this.url + '/fantasia/searchById?id=' + id);
  }
  
  getAllFantasia() {
    return this.http.get(this.url + '/fantasia/listAll');
  }

  createOrUpdateTaglia(body: {}) {
    return this.http.post(this.url + '/taglia/createOrUpdate', body);
  }

  getByIdTaglia(id: number) {
    return this.http.get(this.url + '/taglia/searchById?id=' + id);
  }
  
  getAllTaglia() {
    return this.http.get(this.url + '/taglia/listAll');
  }

  createOrUpdateTipoColletto(body: {}) {
    return this.http.post(this.url + '/tipoColletto/createOrUpdate', body);
  }

  getByIdTipoColletto(id: number) {
    return this.http.get(this.url + '/tipoColletto/searchById?id=' + id);
  }
  
  getAllTipoColletto() {
    return this.http.get(this.url + '/tipoColletto/listAll');
  }

  createOrUpdateTipoScarpa(body: {}) {
    return this.http.post(this.url + '/tipoScarpa/createOrUpdate', body);
  }

  getByIdTipoScarpa(id: number) {
    return this.http.get(this.url + '/tipoScarpa/searchById?id=' + id);
  }
  
  getAllTipoScarpa() {
    return this.http.get(this.url + '/tipoScarpa/listAll');
  }

  createOrUpdateLunghezza(body: {}) {
    return this.http.post(this.url + '/lunghezza/createOrUpdate', body);
  }

  getByIdLunghezza(id: number) {
    return this.http.get(this.url + '/lunghezza/searchById?id=' + id);
  }

  getByDescLunghezza(desc: string) {
    return this.http.get(this.url + '/lunghezza/searchByDesc?descrizione=' + desc);
  }
  
  getAllLunghezza() {
    return this.http.get(this.url + '/lunghezza/listAll');
  }

  createOrUpdateLunghezzaManica(body: {}) {
    return this.http.post(this.url + '/lunghezzaManica/createOrUpdate', body);
  }

  getByIdLunghezzaManica(id: number) {
    return this.http.get(this.url + '/lunghezzaManica/searchById?id=' + id);
  }

  getByDescLunghezzaManica(desc: string) {
    return this.http.get(this.url + '/lunghezzaManica/searchByDesc?descrizione=' + desc);
  }
  
  getAllLunghezzaManica() {
    return this.http.get(this.url + '/lunghezzaManica/listAll');
  }
  

  createOrUpdateMarca(body: {}) {
    return this.http.post(this.url + '/marca/createOrUpdate', body);
  }

  getByIdMarca(id: number) {
    return this.http.get(this.url + '/marca/searchById?id=' + id);
  }

  getByDescMarca(desc: string) {
    return this.http.get(this.url + '/marca/searchByDesc?descrizione=' + desc);
  }
  
  getAllMarca() {
    return this.http.get(this.url + '/marca/listAll');
  }

  createOrUpdateMateriale(body: {}) {
    return this.http.post(this.url + '/materiale/createOrUpdate', body);
  }

  getByIdMateriale(id: number) {
    return this.http.get(this.url + '/materiale/searchById?id=' + id);
  }

  getByDescMateriale(desc: string) {
    return this.http.get(this.url + '/materiale/searchByDesc?descrizione=' + desc);
  }
  
  getAllMateriale() {
    return this.http.get(this.url + '/materiale/listAll');
  }


}