import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Marca } from '../interfaces/marca';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private apiService = inject(ApiService);

  url: string = 'http://localhost:3000/marcas';

  getMarcas(): Observable<Marca[]> {

    const MarcasArrayObservable = this.apiService.getRequest(this.url) as Observable<Marca[]>;

    return MarcasArrayObservable;
  }

  getMarcaById(idMarca: number): Observable<Marca> {
    
    const marcaObservable = this.apiService.getRequest(`${this.url}/p/`, {name: 'idMarca', value: idMarca}) as Observable<Marca>;

    return marcaObservable;
  }
}
