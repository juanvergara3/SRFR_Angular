import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Factura } from '../interfaces/factura';
import { Observable } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getFacturas():Observable<Factura[]> {
    return this.httpClient.get<Factura[]>('http://localhost:3000/');
  }
}