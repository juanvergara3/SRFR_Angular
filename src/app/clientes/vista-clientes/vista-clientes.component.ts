import { Component, Signal, computed, signal, WritableSignal } from '@angular/core';

import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'vista-clientes',
  templateUrl: './vista-clientes.component.html',
  styleUrls: ['./vista-clientes.component.css']
})
export class VistaClientesComponent {
    clientesArray:  WritableSignal<Cliente[]> = signal([]);

    filterText: Signal<string> = computed(() => 
      this.searchBarService.searchTextSignal().toLocaleLowerCase()
    );

    filteredClientesArray: Signal<Cliente[]> = computed(() => 
      this.clientesArray().filter(cliente => 
        cliente?.nombre.toLowerCase().includes(this.filterText()) || 
        cliente?.nit.toString().includes(this.filterText())
      )
    );

    constructor(private clienteService: ClienteService, public searchBarService: SearchBarService) { }

    getClientes(): void {
        this.clienteService.getClientes().subscribe(clientesReturned => 
          this.clientesArray.set(clientesReturned)
        );
    }

    ngOnInit(): void {
        this.getClientes();
    }

  //totalItemNumber: number = this.listOfItems.length;
}
