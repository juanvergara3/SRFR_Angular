import { Component, Input, inject } from '@angular/core';

import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { UbicacionService } from 'src/app/services/ubicacion.service';

@Component({
  selector: 'ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent {

  private ubicacionService = inject(UbicacionService);
  
  editing: boolean = false; 

  idCliente!: number;
  nombre!: string;
  direccion!: string;
  telefono?: string;

  @Input()
  ubicacionItem!: Ubicacion;

  ngOnInit(): void { 
    this.initValues();
  }

  submitEditResponsable() {
    this.ubicacionService.editUbicacion(this.ubicacionItem.id_ubicacion, this.idCliente, this.nombre, this.direccion, this.telefono);

    this.ubicacionItem.id_cliente = this.idCliente;
    this.ubicacionItem.nombre = this.nombre;
    this.ubicacionItem.direccion = this.direccion;
    this.ubicacionItem.telefono = this.telefono;

    this.editing = false;
  }

  resetValues() {
    this.initValues();

    this.editing = false;
  }

  initValues() {
    this.idCliente = this.ubicacionItem.id_cliente;
    this.nombre = this.ubicacionItem.nombre;
    this.direccion = this.ubicacionItem.direccion;
    this.telefono = this.ubicacionItem.telefono;
  }
}
