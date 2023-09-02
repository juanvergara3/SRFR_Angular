import { Injectable } from '@angular/core';
import { Observable, of, find } from 'rxjs';

import { Activo } from '../interfaces/activo';
import { activosPlaceholderArray } from '../placeholder_data/placeholder-activos';

import { Grupo } from '../interfaces/grupo';
import { gruposPlaceholderArray } from '../placeholder_data/placeholder-grupos';

import { Tipo } from '../interfaces/tipo';
import { tiposPlaceholderArray } from '../placeholder_data/placeholder-tipos';

import { Marca } from '../interfaces/marca';
import { marcasPlaceholderArray } from '../placeholder_data/placeholder-marcas';

import { Estado } from '../interfaces/estado';
import { estadosPlaceholderArray } from '../placeholder_data/placeholder-estados';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  constructor(private messageService: MessageService) { }

  getActivos(): Observable<Activo[]> {
    const activosArrayObservable = of(activosPlaceholderArray);

    this.messageService.add('ActivoService: Activos obtenidos con éxito.');

    return activosArrayObservable;
  }

  getGrupos(): Observable<Grupo[]> {
    const gruposArrayObservable = of(gruposPlaceholderArray);

    this.messageService.add('ActivoService: Grupos obtenidos con éxito.');

    return gruposArrayObservable;
  }

  getTipo(id: number): Observable<Tipo>{
    const tipoObservable = of(tiposPlaceholderArray.find(x => x.id == id)!);

    return tipoObservable;
  }

  getMarca(id: number): Observable<Marca>{
    const marcaObservable = of(marcasPlaceholderArray.find(x => x.id == id)!);

    return marcaObservable;
  }

  getEstado(id: number): Observable<Estado>{
    const estadoObservable = of(estadosPlaceholderArray.find(x => x.id == id)!);

    return estadoObservable;
  }
}