import { Component, inject } from '@angular/core';

import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'modales-vista-clientes',
  templateUrl: './modales-vista-clientes.component.html',
  styleUrls: ['./modales-vista-clientes.component.css']
})
export class ModalesVistaClientesComponent {

  private clienteService = inject(ClienteService);

  nombre: string = ''; 
  nit!: number;
  digitoVerificacion?: number;

  submitNewCliente() {
    this.clienteService.newCliente(this.nombre, this.nit, this.digitoVerificacion);

    this.clearSelections();
  }

  clearSelections() {
    this.nombre = ''; 
    this.nit = undefined as any; 
    this.digitoVerificacion = undefined as any;
  }
}
