import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Cliente } from '../interfaces/cliente';
import { clientesPlaceholderArray } from '../placeholder_data/placeholder-clientes';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private messageService: MessageService) { }

  getClientes(): Observable<Cliente[]> {
    const clientesArrayObservable = of(clientesPlaceholderArray);

    this.messageService.add('ClienteService: Clientes obtenidos con éxito.');

    return clientesArrayObservable;
  }
}