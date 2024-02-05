import { Component, inject } from '@angular/core';

import { GrupoService } from 'src/app/services/grupo.service';

@Component({
  selector: 'modales-vista-activos',
  templateUrl: './modales-vista-activos.component.html',
  styleUrls: ['./modales-vista-activos.component.css']
})
export class ModalesVistaActivosComponent {

  private grupoService = inject(GrupoService);

  nombre: string = ''; 

  submitNewGrupo() {
    this.grupoService.newGrupo(this.nombre);

    this.clearSelections();
  }

  clearSelections() {
    this.nombre = ''; 
  }
}
