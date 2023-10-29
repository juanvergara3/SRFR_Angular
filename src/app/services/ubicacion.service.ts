import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Ubicacion } from '../interfaces/ubicacion';

import { MessageService } from './message.service';
import { ApiService } from './api.service';
import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private apiService = inject(ApiService);
  private router = inject(RouterService);
  private messageService = inject(MessageService);

  url: string = this.router.getRoute();

  getUbicaciones(): Observable<Ubicacion[]> {

    const ubicacionesArrayObservable = this.apiService.getRequest(this.url) as Observable<Ubicacion[]>;

    this.messageService.add('UbicacionService: ubicaciones obtenidas con éxito.');

    return ubicacionesArrayObservable;
  }

  getUbicacionesByCliente(idCliente: number): Observable<Ubicacion[]> {

    const ubicacionesArrayObservable = this.apiService.getRequest(`http://localhost:3000/ubicaciones/p/`, {name: 'idCliente', value: idCliente}) as Observable<Ubicacion[]>;

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
