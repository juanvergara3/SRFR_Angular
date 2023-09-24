import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Ubicacion } from '../interfaces/ubicacion';

import { MessageService } from './message.service';
import { ApiService } from './api.service';
import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  url: string = this.router.getRoute();

  constructor(private apiService: ApiService, private router: RouterService,private messageService: MessageService) { }

  getUbicaciones(): Observable<Ubicacion[]> {

    const ubicacionesArrayObservable = this.apiService.getRequest(this.url) as Observable<Ubicacion[]>;

    this.messageService.add('UbicacionService: ubicaciones obtenidas con éxito.');

    return ubicacionesArrayObservable;
  }
}
