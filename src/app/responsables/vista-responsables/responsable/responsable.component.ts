import { Component, Input, inject } from '@angular/core';

import { Responsable } from 'src/app/interfaces/responsable';
import { ResponsableService } from 'src/app/services/responsable.service';

@Component({
  selector: 'responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css']
})
export class ResponsableComponent {

  private responsableService = inject(ResponsableService);

  editing: boolean = false; 
  
  numeroFactura!: number;
  fechaGeneracion!: string;

  nombre!: string;
  cedula!: number;
  telefono!: string;
  correo!: string;

  @Input()
  responsableItem!: Responsable;

  ngOnInit(): void {
    this.initValues();
  }

  submitEditResponsable() {
    this.responsableService.editResponsable(this.responsableItem.id_responsable, this.nombre, this.cedula, this.telefono, this.correo);

    this.responsableItem.nombre = this.nombre;
    this.responsableItem.cedula = this.cedula;
    this.responsableItem.telefono = this.telefono;
    this.responsableItem.correo = this.correo;

    this.editing = false;
  }

  resetValues() {
    this.initValues();

    this.editing = false;
  }

  initValues() {
    this.nombre = this.responsableItem.nombre;
    this.cedula = this.responsableItem.cedula;
    this.telefono = this.responsableItem.telefono;
    this.correo = this.responsableItem.correo;
  }
}
