import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Grupo } from '../interfaces/grupo';

//import { MessageService } from './message.service';
import { ApiService } from './api.service';
//import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private apiService = inject(ApiService);
  //private router = inject(RouterService);
  //private messageService = inject(MessageService);

  url: string = 'http://localhost:3000/grupos';

  getGrupos(): Observable<Grupo[]> {

    const gruposArrayObservable = this.apiService.getRequest(this.url) as Observable<Grupo[]>;

    //this.messageService.add('ClienteService: Clientes obtenidos con éxito.');

    return gruposArrayObservable;
  }
}
