import { Component, inject } from '@angular/core';

import { ResponsableService } from 'src/app/services/responsable.service';

@Component({
  selector: 'modales-vista-responsables',
  templateUrl: './modales-vista-responsables.component.html',
  styleUrls: ['./modales-vista-responsables.component.css']
})
export class ModalesVistaResponsablesComponent {

  private responsableService = inject(ResponsableService);

  nombre: string = ''; 
  cedula!: number; 
  telefono: string = ''; 
  correo: string = '';

  submitNewResponsable() {
    this.responsableService.newResponsable(this.nombre, this.cedula, this.telefono, this.correo);

    this.clearSelections();
  }

  clearSelections() {
    this.nombre = ''; 
    this.cedula = undefined as any; 
    this.telefono = ''; 
    this.correo = '';
  }
}
