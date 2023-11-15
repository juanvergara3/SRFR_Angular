import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Cliente } from '../interfaces/cliente';

import { MessageService } from './message.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiService = inject(ApiService);
  private messageService = inject(MessageService);

  url: string = 'clientes';

  getClientes(): Observable<Cliente[]> {

    const clientesArrayObservable = this.apiService.getRequest(this.url) as Observable<Cliente[]>;

    this.messageService.add('ClienteService: Clientes obtenidos con éxito.');

    return clientesArrayObservable;
  }

  getClienteById(idCliente: number): Observable<Cliente> {
    
    const clienteObservable = this.apiService.getRequest(`${this.url}/id/p/`, {name: 'idCliente', value: idCliente}) as Observable<Cliente>;

    return clienteObservable;
  }

  editCliente(idCliente: number, nit?: number, digitoVerificacion?: number, nombre?: string){

    let response = this.apiService.patchRequest(this.url, {id_cliente: idCliente, nit:nit, digito_verificacion: digitoVerificacion, nombre: nombre});

    response.subscribe((data) => 
      this.messageService.add(data.toString())
    );

  }
}
