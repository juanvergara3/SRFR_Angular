import { Component, inject, Input, signal, WritableSignal } from '@angular/core';

import { UbicacionService } from 'src/app/services/ubicacion.service';

import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'modales-vista-ubicaciones',
  templateUrl: './modales-vista-ubicaciones.component.html',
  styleUrls: ['./modales-vista-ubicaciones.component.css']
})
export class ModalesVistaUbicacionesComponent {

  private ubicacionService = inject(UbicacionService);
  private clienteService = inject(ClienteService);

  clientesArray: WritableSignal<Cliente[]> = signal([]);

  idCliente: number = 0;
  nombre: string = '';
  direccion: string = '';
  telefono?: string = '';

  getClientes(): void {
    this.clienteService.getClientes().subscribe(clientesReturned => this.clientesArray.set(clientesReturned));
  }

  submitNewUbicacion() {
    this.ubicacionService.newUbicacion(this.idCliente, this.nombre, this.direccion, this.telefono);

    this.clearSelections();
  }

  clearSelections() {
    this.idCliente = 0;
    this.nombre = '';
    this.direccion = '';
    this.telefono = '';
  }

  ngOnInit(): void {
    this.getClientes();
  }

}
