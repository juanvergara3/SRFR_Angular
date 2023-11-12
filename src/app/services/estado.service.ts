import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Estado } from '../interfaces/estado';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private apiService = inject(ApiService);

  url: string = 'estados';

  getEstados(): Observable<Estado[]> {

    const estadosArrayObservable = this.apiService.getRequest(this.url) as Observable<Estado[]>;

    return estadosArrayObservable;
  }

  getEstadoById(idEstado: number): Observable<Estado> {
    
    const estadoObservable = this.apiService.getRequest(`${this.url}/p/`, {name: 'idEstado', value: idEstado}) as Observable<Estado>;

    return estadoObservable;
  }
}
