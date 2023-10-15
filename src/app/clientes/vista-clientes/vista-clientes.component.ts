import { Component, Signal, computed, signal, WritableSignal, inject } from '@angular/core';

import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

import { SearchBarService } from 'src/app/services/search-bar.service';
import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'vista-clientes',
  templateUrl: './vista-clientes.component.html',
  styleUrls: ['./vista-clientes.component.css']
})
export class VistaClientesComponent {

  private clienteService = inject(ClienteService);
  public searchBarService = inject(SearchBarService);
  public windowTitleService = inject(WindowTitleService);

  clientesArray:  WritableSignal<Cliente[]> = signal([]);

  windowTitle = `Clientes(${this.clientesArray().length})`;

  filterText: Signal<string> = computed(() => 
    this.searchBarService.searchTextSignal().toLocaleLowerCase()
  );

  filteredClientesArray: Signal<Cliente[]> = computed(() => 
    this.clientesArray().filter(cliente => 
      cliente?.nombre.toLowerCase().includes(this.filterText()) || 
      cliente?.nit.toString().includes(this.filterText())
    )
  );

  getClientes(): void {
      this.clienteService.getClientes().subscribe(clientesReturned => 
        this.clientesArray.set(clientesReturned)
      );
  }

  ngOnInit(): void {
      this.getClientes();

      this.windowTitleService.setWindowTitle(this.windowTitle);
  }

}
