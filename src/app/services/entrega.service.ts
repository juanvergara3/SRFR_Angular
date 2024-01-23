import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Entrega } from '../interfaces/entrega';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EntregaService {

  private apiService = inject(ApiService);

  url: string = 'entregas';

  getEntregasByActivo(idActivo: number): Observable<Entrega[]> {
    return this.apiService.getRequest(`${this.url}/p/`, {name: 'id_activo', value: idActivo}) as Observable<Entrega[]>;
  }

  getEntregasByResposable(idResponsable: number): Observable<Entrega[]> {
    return this.apiService.getRequest(`${this.url}/responsable/p/`, {name: 'id_responsable', value: idResponsable}) as Observable<Entrega[]>;
  }

  getEntregasByUbicacion(idUbicacion: number): Observable<Entrega[]> {
    return this.apiService.getRequest(`${this.url}/ubicacion/p/`, {name: 'id_ubicacion', value: idUbicacion}) as Observable<Entrega[]>;
  }

  getEntregasByCliente(idCliente: number): Observable<Entrega[]> {
    return this.apiService.getRequest(`${this.url}/cliente/p/`, {name: 'id_cliente', value: idCliente}) as Observable<Entrega[]>;
  }

  getLastEntregaByActivo(idActivo: number): Observable<Entrega> {
    return this.apiService.getRequest(`${this.url}/latest/p/`, {name: 'id_activo', value: idActivo}) as Observable<Entrega>;
  }

}
