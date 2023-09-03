import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Ubicacion } from '../interfaces/ubicacion';
import { ubicacionesPlaceholderArray } from '../placeholder_data/placeholder-ubicaciones';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private messageService: MessageService) { }

  getUbicaciones(): Observable<Ubicacion[]> {
    const ubicacionesArrayObservable = of(ubicacionesPlaceholderArray);

    this.messageService.add('UbicacionService: ubicaciones obtenidas con éxito.');

    return ubicacionesArrayObservable;
  }
}
