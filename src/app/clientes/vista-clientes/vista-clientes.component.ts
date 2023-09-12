import { Component, Signal, computed } from '@angular/core';

import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'vista-clientes',
  templateUrl: './vista-clientes.component.html',
  styleUrls: ['./vista-clientes.component.css']
})
export class VistaClientesComponent {
    clientesArray: Cliente[] = [];

    filterText: Signal<string> = computed( 
      () => this.searchBarService.searchTextSignal().toLocaleLowerCase()
      );

    filteredClientesArray: Signal<Cliente[]> = computed(
      () => this.clientesArray.filter(
        cliente => { let text = this.filterText();
          return cliente?.nombre.toLowerCase().includes(text) || 
          cliente?.nit.toString().includes(text);
        } 
        )
      );

    constructor(private clienteService: ClienteService, public searchBarService: SearchBarService) { }

    getClientes(): void {
        this.clienteService.getClientes().subscribe(clientesReturned => this.clientesArray = clientesReturned);
    }

    ngOnInit(): void {
        this.getClientes();
    }

  //totalItemNumber: number = this.listOfItems.length;
}
