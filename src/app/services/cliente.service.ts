import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cliente } from '../interfaces/cliente';

import { MessageService } from './message.service';
import { ApiService } from './api.service';
import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = this.router.getRoute();

  constructor(private apiService: ApiService, private router: RouterService,private messageService: MessageService) { }

  getClientes(): Observable<Cliente[]> {

    const clientesArrayObservable = this.apiService.getRequest(this.url) as Observable<Cliente[]>;

    this.messageService.add('ClienteService: Clientes obtenidos con éxito.');

    return clientesArrayObservable;
  }
}