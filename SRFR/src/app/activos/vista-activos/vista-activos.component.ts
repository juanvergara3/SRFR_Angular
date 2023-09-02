import { Component, OnInit } from '@angular/core';

import { Activo } from 'src/app/interfaces/activo';
import { Grupo } from 'src/app/interfaces/grupo';
import { ActivoService } from 'src/app/services/activo.service';

@Component({
  selector: 'vista-activos',
  templateUrl: './vista-activos.component.html',
  styleUrls: ['./vista-activos.component.css']
})
export class VistaActivosComponent implements OnInit {

  activosArray: Activo[] = [];
  gruposArray: Grupo[] = [];

  orderedContent: {index: number, grupo: Grupo, activos: Activo[] }[] = [];

  showGroup: boolean[] = [];

  constructor(private activoService: ActivoService) { }

  getActivos(): void {
    this.activoService.getActivos().subscribe(activosReturned => this.activosArray = activosReturned);
  }

  getGrupos(): void {
    this.activoService.getGrupos().subscribe(gruposReturned => this.gruposArray = gruposReturned);
  }

  orderContent(): void { // esta función debe ser reemplazada por una querry de sql, esto es demasiado lento y añade mucha complejidad.

    let index: number = 0;
    let grupo: Grupo;
    let activos: Activo[] = [];

    for(let i = 0, id:number; i < this.gruposArray.length; i++){
      
      id = this.gruposArray[i].id;

      for(let j = 0; j < this.activosArray.length; j++){
        if(this.activosArray[j].id_grupo == id){
          activos.push(this.activosArray[j]);
        }
      }

      if(activos.length != 0){

        grupo = this.gruposArray[i];

        this.orderedContent.push({index, grupo, activos});
        index++;
        activos = [];
      }
    }

    for(let i = 0; i < this.orderedContent.length; i++){
      this.showGroup.push(true);
    }
  }

  ngOnInit(): void {
    this.getGrupos();
    this.getActivos();
    this.orderContent();
  }

  collapse(index: number){
    this.showGroup[index] = !this.showGroup[index];
  }
}
