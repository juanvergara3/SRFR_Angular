import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Activo } from '../interfaces/activo';

import { MessageService } from './message.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  private apiService = inject(ApiService);
  private messageService = inject(MessageService);

  url: string = 'activos';

  getActivos(): Observable<Activo[]> {

    const activosArrayObservable = this.apiService.getRequest(this.url) as Observable<Activo[]>;

    this.messageService.add('ActivoService: Activos obtenidos con éxito.');

    return activosArrayObservable;
  }

  getActivosByGrupo(idGrupo: number): Observable<Activo[]> {

    const activosArrayObservable = this.apiService.getRequest(`${this.url}/p/`, {name: 'idGrupo', value: idGrupo}) as Observable<Activo[]>;

    return activosArrayObservable;
  }

  getActivosPendientes(): Observable<Activo[]> {
    const activosArrayObservable = this.apiService.getRequest(`${this.url}/pendientes/`) as Observable<Activo[]>;

    return activosArrayObservable;
  }

  getActivosByPeriodo(idPeriodo: number): Observable<Activo[]> {
    const activosArrayObservable = this.apiService.getRequest(`${this.url}/periodo/p/`, {name: 'id_periodo', value: idPeriodo}) as Observable<Activo[]>;

    return activosArrayObservable;
  }

  getActivosByEntrega(idEntrega: number): Observable<Activo[]> {
    const activosArrayObservable = this.apiService.getRequest(`${this.url}/entrega/p/`, {name: 'id_entrega', value: idEntrega}) as Observable<Activo[]>;

    return activosArrayObservable;
  }
  
  calculteContrast(color: string): string {

    if(color){
      let red = parseInt(color.slice(1, 3), 16);
      let green = parseInt(color.slice(3, 5), 16);
      let blue = parseInt(color.slice(5, 7), 16);

      let arr: number[] = [red, green, blue]

      let L: number;

      for(let i = 0, c; i < arr.length; i++){

        c = arr[i];
        c = c / 255.0;

        if (c <= 0.04045) {
          c = c/12.92;
        } else {
          c = ((c+0.055)/1.055) ** 2.4;
        }

        arr[i] = c;
      }

      L = (0.2126 * arr[0]) + (0.7152 * arr[1]) + (0.0722 * arr[2]);

      if( L > 0.179) {
        return '#000000'
      } else {
        return '#ffffff'
      }
    }

    return '';
  }
}
