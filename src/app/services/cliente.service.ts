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

  getClienteByUbicacion(idUbicacion: number): Observable<Cliente> {
    
    const clienteObservable = this.apiService.getRequest(`${this.url}/ubicacion/p/`, {name: 'id_ubicacion', value: idUbicacion}) as Observable<Cliente>;

    return clienteObservable;
  }

  editCliente(idCliente: number, nit?: number, digitoVerificacion?: number, nombre?: string) { //remember this is done like this for when only some fields are edited, not all.

    let response = this.apiService.patchRequest(this.url, {id_cliente: idCliente, nit:nit, digito_verificacion: digitoVerificacion, nombre: nombre});

    response.subscribe((data) => 
      this.messageService.add(data.toString())
    );
  }

  newCliente(nombre: string, nit: number, digitoVerificacion?: number) {

    let response = this.apiService.postRequest(this.url, {nombre: nombre, nit: nit, digito_verificacion: digitoVerificacion});
    
    response.subscribe((data) => 
      this.messageService.add(data.toString())
    );
  }
}
