import { Component, Input, inject } from '@angular/core';

import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  private clienteService = inject(ClienteService);

  editing: boolean = false; 

  nit!: number;
  digitoVerificacion?: number;
  nombre!: string;

  @Input()
  clienteItem!: Cliente;

  ngOnInit(): void {
    this.initValues();

    console.log(this.digitoVerificacion);
  }

  submitEditResponsable() {
    this.clienteService.editCliente(this.clienteItem.id_cliente, this.nit, this.digitoVerificacion, this.nombre);

    this.clienteItem.nit = this.nit;
    this.clienteItem.digito_verificacion = this.digitoVerificacion;
    this.clienteItem.nombre = this.nombre;

    this.editing = false;
  }

  resetValues() {
    this.initValues();

    this.editing = false;
  }

  initValues() {
    this.nit = this.clienteItem.nit;
    this.digitoVerificacion = this.clienteItem.digito_verificacion;
    this.nombre = this.clienteItem.nombre;
  }
}
