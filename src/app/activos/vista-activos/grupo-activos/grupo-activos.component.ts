import { Component, WritableSignal, signal, inject, Input } from '@angular/core';

import { Activo } from 'src/app/interfaces/activo';
import { ActivoService } from 'src/app/services/activo.service';

import { Grupo } from 'src/app/interfaces/grupo';

@Component({
  selector: 'grupo-activos',
  templateUrl: './grupo-activos.component.html',
  styleUrls: ['./grupo-activos.component.css']
})
export class GrupoActivosComponent{

  private activoService = inject(ActivoService);

  activosArray: WritableSignal<Activo[]> = signal([]);

  @Input()
  grupoItem!: Grupo;
 
  showGroup: boolean = true;

  collapse(){
    this.showGroup = !this.showGroup;
  }

  getActivosByGrupo(idGrupo: number) {
    this.activoService.getActivosByGrupo(idGrupo).subscribe(activosReturned =>
      this.activosArray.set(activosReturned)  
    );
  }

  ngOnInit(): void {
    this.getActivosByGrupo(this.grupoItem.id_grupo);
  }
}
