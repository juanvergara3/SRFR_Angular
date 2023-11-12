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

  editResponsable(idResponsable: number, nombre?: string, cedula?: number, telefono?: string, correo?: string){

    let response = this.apiService.patchRequest(this.url, {id_responsable: idResponsable, nombre: nombre, cedula: cedula, telefono: telefono, correo: correo});

    response.subscribe((data) => 
      this.messageService.add(data.toString())
    );

  }
}
