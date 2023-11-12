import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Grupo } from '../interfaces/grupo';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private apiService = inject(ApiService);

  url: string = 'grupos';

  getGrupos(): Observable<Grupo[]> {

    const gruposArrayObservable = this.apiService.getRequest(this.url) as Observable<Grupo[]>;

    return gruposArrayObservable;
  }
}
