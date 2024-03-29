import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Responsable } from 'src/app/interfaces/responsable';

import { MessageService } from './message.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  private apiService = inject(ApiService);
  private messageService = inject(MessageService);

  url: string = 'responsables';

  getResponsables(): Observable<Responsable[]> {

    const responsablesArrayObservable = this.apiService.getRequest(this.url) as Observable<Responsable[]>;

    this.messageService.add('ResponsableService: responsables obtenidos con éxito.');

    return responsablesArrayObservable;
  }

  getResponsableById(idResponsable: number): Observable<Responsable> {
    
    const responsableObservable = this.apiService.getRequest(`${this.url}/id/p/`, {name: 'idResponsable', value: idResponsable}) as Observable<Responsable>;

    return responsableObservable;
  }

  editResponsable(idResponsable: number, nombre?: string, cedula?: number, telefono?: string, correo?: string){

    let response = this.apiService.patchRequest(this.url, {id_responsable: idResponsable, nombre: nombre, cedula: cedula, telefono: telefono, correo: correo});

    response.subscribe((data) => 
      this.messageService.add(data.toString())
    );
  }

  newResponsable(nombre: string, cedula: number, telefono: string, correo: string) {

    let response = this.apiService.postRequest(this.url, {nombre: nombre, cedula: cedula, telefono: telefono, correo: correo});
    
    response.subscribe((data) => 
      this.messageService.add(data.toString())
    );
  }
}
