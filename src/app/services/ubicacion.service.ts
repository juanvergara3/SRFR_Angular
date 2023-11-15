import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Ubicacion } from '../interfaces/ubicacion';

import { MessageService } from './message.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private apiService = inject(ApiService);
  private messageService = inject(MessageService);

  url: string = 'ubicaciones';

  getUbicaciones(): Observable<Ubicacion[]> {

    const ubicacionesArrayObservable = this.apiService.getRequest(this.url) as Observable<Ubicacion[]>;

    this.messageService.add('UbicacionService: ubicaciones obtenidas con éxito.');

    return ubicacionesArrayObservable;
  }

  getUbicacionById(idUbicacion: number): Observable<Ubicacion> {
    
    const ubicacionObservable = this.apiService.getRequest(`${this.url}/id/p/`, {name: 'idUbicacion', value: idUbicacion}) as Observable<Ubicacion>;

    return ubicacionObservable;
  }

  getUbicacionesByCliente(idCliente: number): Observable<Ubicacion[]> {

    const ubicacionesArrayObservable = this.apiService.getRequest(`${this.url}/p/`, {name: 'idCliente', value: idCliente}) as Observable<Ubicacion[]>;

    //this.messageService.add('UbicacionService: ubicaciones obtenidas con éxito.');

    return ubicacionesArrayObservable;
  }

  editUbicacion(idUbicacion: number, idCliente?: number, nombre?: string, direccion?: string, telefono?: string){

    let response = this.apiService.patchRequest(this.url, {id_ubicacion: idUbicacion, id_cliente: idCliente, nombre: nombre, direccion: direccion, telefono: telefono});

    response.subscribe((data) => 
      this.messageService.add(data.toString())
    );
  }
}
