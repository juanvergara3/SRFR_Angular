import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Activo } from '../interfaces/activo';

import { MessageService } from './message.service';
import { ApiService } from './api.service';
import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  private apiService = inject(ApiService);
  private router = inject(RouterService);
  private messageService = inject(MessageService);

  url: string = this.router.getRoute();

  getActivos(): Observable<Activo[]> {

    const activosArrayObservable = this.apiService.getRequest(this.url) as Observable<Activo[]>;

    this.messageService.add('ActivoService: Activos obtenidos con éxito.');

    return activosArrayObservable;
  }

  getActivosByGrupo(idGrupo: number): Observable<Activo[]> {

    const activosArrayObservable = this.apiService.getRequest(`${this.url}/p/`, {name: 'idGrupo', value: idGrupo}) as Observable<Activo[]>;

    return activosArrayObservable;
  }
}
