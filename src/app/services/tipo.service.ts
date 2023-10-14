import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Tipo } from '../interfaces/tipo';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  private apiService = inject(ApiService);

  url: string = 'http://localhost:3000/tipos';

  getTipos(): Observable<Tipo[]> {

    const TiposArrayObservable = this.apiService.getRequest(this.url) as Observable<Tipo[]>;

    return TiposArrayObservable;
  }

  getTipoById(idTipo: number): Observable<Tipo> {
    
    const TipoObservable = this.apiService.getRequest(`${this.url}/p/`, {name: 'idTipo', value: idTipo}) as Observable<Tipo>;

    return TipoObservable;
  }
}
