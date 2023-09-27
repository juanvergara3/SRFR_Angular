import { Injectable, inject } from '@angular/core';
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

import { Proveedor } from '../interfaces/proveedor';
import { proveedoresPlaceholderArray } from '../placeholder_data/placeholder-proveedores';

import { Prestador } from '../interfaces/prestador';
import { prestadoresPlaceholderArray } from '../placeholder_data/placeholder-prestadores';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  private messageService = inject(MessageService);

  getActivos(): Observable<Activo[]> {
    const activosArrayObservable = of(activosPlaceholderArray);

    this.messageService.add('ActivoService: Activos obtenidos con éxito.');

    return activosArrayObservable;
  }

  getActivo(id: number): Observable<Activo> {
    const activoObservable = of(activosPlaceholderArray.find(x => x.id == id)!);

    this.messageService.add(`ActivoService: con id=${id} obtenidos con éxito.`);

    return activoObservable;
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

  getProveedor(id: number): Observable<Proveedor>{
    const proveedorObservable = of(proveedoresPlaceholderArray.find(x => x.id == id)!);

    return proveedorObservable;
  }

  getPrestador(id: number): Observable<Prestador>{
    const prestadorObservable = of(prestadoresPlaceholderArray.find(x => x.id == id)!);

    return prestadorObservable;
  }
}