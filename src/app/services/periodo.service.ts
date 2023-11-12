import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Periodo } from 'src/app/interfaces/periodo';

import { MessageService } from './message.service';
import { ApiService } from './api.service';
import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {

  private apiService = inject(ApiService);
  private router = inject(RouterService);
  private messageService = inject(MessageService);

  url: string = 'periodos';

  getPeriodosByActivo(idActivo: number): Observable<Periodo[]> {
    return this.apiService.getRequest(`${this.url}/p/`, {name: 'id_activo', value: idActivo}) as Observable<Periodo[]>;
  }

  getLastPeriodoByActivo(idActivo: number): Observable<Periodo> {
    return this.apiService.getRequest(`${this.url}/latest/p/`, {name: 'id_activo', value: idActivo}) as Observable<Periodo>;
  }
}
