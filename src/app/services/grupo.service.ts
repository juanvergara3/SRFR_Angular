import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Grupo } from '../interfaces/grupo';

import { MessageService } from './message.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private messageService = inject(MessageService);
  private apiService = inject(ApiService);

  url: string = 'grupos';

  getGrupos(): Observable<Grupo[]> {

    const gruposArrayObservable = this.apiService.getRequest(this.url) as Observable<Grupo[]>;

    return gruposArrayObservable;
  }

  getGrupoById(idGrupo: number): Observable<Grupo> {
    
    const grupoObservable = this.apiService.getRequest(`${this.url}/id/p/`, {name: 'idGrupo', value: idGrupo}) as Observable<Grupo>;

    return grupoObservable;
  }

  newGrupo(nombre: string) {

    let response = this.apiService.postRequest(this.url, {nombre: nombre});
    
    response.subscribe((data) => 
      this.messageService.add(data.toString())
    );
  }
}
