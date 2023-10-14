import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Estado } from '../interfaces/estado';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private apiService = inject(ApiService);

  url: string = 'http://localhost:3000/estados';

  getEstados(): Observable<Estado[]> {

    const EstadosArrayObservable = this.apiService.getRequest(this.url) as Observable<Estado[]>;

    return EstadosArrayObservable;
  }

  getEstadoById(idEstado: number): Observable<Estado> {
    
    const EstadoObservable = this.apiService.getRequest(`${this.url}/p/`, {name: 'idEstado', value: idEstado}) as Observable<Estado>;

    return EstadoObservable;
  }
}
