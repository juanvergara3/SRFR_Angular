import { Component } from '@angular/core';

import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'vista-clientes',
  templateUrl: './vista-clientes.component.html',
  styleUrls: ['./vista-clientes.component.css']
})
export class VistaClientesComponent {
    clientesArray: Cliente[] = [];

    constructor(private clienteService: ClienteService) { }

    getClientes(): void {
        this.clienteService.getClientes().subscribe(clientesReturned => this.clientesArray = clientesReturned);
    }

    ngOnInit(): void {
        this.getClientes();
    }

  //totalItemNumber: number = this.listOfItems.length;
}
