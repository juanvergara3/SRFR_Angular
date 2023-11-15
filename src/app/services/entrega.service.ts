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
}
