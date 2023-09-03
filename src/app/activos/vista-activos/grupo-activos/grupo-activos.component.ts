import { Component, Input } from '@angular/core';

import { Grupo } from 'src/app/interfaces/grupo';
import { Activo } from 'src/app/interfaces/activo';


@Component({
  selector: 'grupo-activos',
  templateUrl: './grupo-activos.component.html',
  styleUrls: ['./grupo-activos.component.css']
})
export class GrupoActivosComponent{

  @Input()
  grupoItem!: { index:number, grupo: Grupo, activos: Activo[] };
 
  showGroup: boolean = true;

  collapse(){
    this.showGroup = !this.showGroup;
  }
}
