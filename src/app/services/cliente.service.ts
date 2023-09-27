import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Cliente } from '../interfaces/cliente';

import { MessageService } from './message.service';
import { ApiService } from './api.service';
import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiService = inject(ApiService);
  private router = inject(RouterService);
  private messageService = inject(MessageService);

  url: string = this.router.getRoute();

  getClientes(): Observable<Cliente[]> {

    const clientesArrayObservable = this.apiService.getRequest(this.url) as Observable<Cliente[]>;

    this.messageService.add('ClienteService: Clientes obtenidos con éxito.');

    return clientesArrayObservable;
  }
}