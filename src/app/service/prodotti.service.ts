import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  url: string = 'http://localhost:8080/rest';

  constructor(private http: HttpClient) { }
}
