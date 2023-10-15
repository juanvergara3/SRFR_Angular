import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Prestador } from '../interfaces/prestador';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {

  private apiService = inject(ApiService);

  url: string = 'http://localhost:3000/prestadores';

  getPrestadores(): Observable<Prestador> {

    const prestadoresArrayObservable = this.apiService.getRequest(this.url) as Observable<Prestador>;

    return prestadoresArrayObservable;
  }

  getPrestadorById(idPrestador: number): Observable<Prestador> {
    
    const prestadorObservable = this.apiService.getRequest(`${this.url}/p/`, {name: 'idPrestador', value: idPrestador}) as Observable<Prestador>;

    return prestadorObservable;
  }
}
