import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdineService {

  url: string = 'http://localhost:8080/rest/ordine';

  constructor(private http: HttpClient) { }
}
