import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Proveedor } from '../interfaces/proveedor';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private apiService = inject(ApiService);

  url: string = 'http://localhost:3000/proveedores';

  getProveedores(): Observable<Proveedor> {

    const proveedoresArrayObservable = this.apiService.getRequest(this.url) as Observable<Proveedor>;

    return proveedoresArrayObservable;
  }

  getProveedorById(idProveedor: number): Observable<Proveedor> {
    
    const proveedorObservable = this.apiService.getRequest(`${this.url}/p/`, {name: 'idProveedor', value: idProveedor}) as Observable<Proveedor>;

    return proveedorObservable;
  }
}
