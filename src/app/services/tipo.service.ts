import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Tipo } from '../interfaces/tipo';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  private apiService = inject(ApiService);

  url: string = 'tipos';

  getTipos(): Observable<Tipo[]> {

    const tiposArrayObservable = this.apiService.getRequest(this.url) as Observable<Tipo[]>;

    return tiposArrayObservable;
  }

  getTipoById(idTipo: number): Observable<Tipo> {
    
    const tipoObservable = this.apiService.getRequest(`${this.url}/id/p/`, {name: 'idTipo', value: idTipo}) as Observable<Tipo>;

    return tipoObservable;
  }
}
