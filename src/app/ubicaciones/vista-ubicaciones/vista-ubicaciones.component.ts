import { Component, Signal, computed, signal, WritableSignal, inject, effect, untracked } from '@angular/core';

import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

import { SearchBarService } from 'src/app/services/search-bar.service';
import { WindowTitleService } from 'src/app/services/window-title.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'vista-ubicaciones',
  templateUrl: './vista-ubicaciones.component.html',
  styleUrls: ['./vista-ubicaciones.component.css']
})
export class VistaUbicacionesComponent {

  private clienteService = inject(ClienteService);
  public searchBarService = inject(SearchBarService);
  public windowTitleService = inject(WindowTitleService);
  private routerService = inject(RouterService);

  clientesArray: WritableSignal<Cliente[]> = signal([]);

  windowTitle = `Ubicaciones`;
  ubicacionesAmount: WritableSignal<number> = signal(0);

  windowTitleEffect = effect(() => {
    if(this.ubicacionesAmount() != 0)
      untracked(() => 
      this.windowTitleService.setWindowTitle(
        this.windowTitle.concat(`(${this.ubicacionesAmount()})`)
      ));
    }
  );

  filterText: Signal<string> = computed(() => 
  this.searchBarService.searchTextSignal().toLocaleLowerCase()
);

  filteredClientesArray: Signal<Cliente[]> = computed(() => 
    this.clientesArray().filter(cliente => 
      cliente?.nombre.toLowerCase().includes(this.filterText()) || 
      cliente?.nit.toString().includes(this.filterText())
    )
  );

  updateUbicacionesAmount(amount: number) {
    this.ubicacionesAmount.set(this.ubicacionesAmount() + amount);
  }

  getClientes(): void {
    this.clienteService.getClientes().subscribe(clientesReturned => this.clientesArray.set(clientesReturned));
  }

  refresh(){
    this.routerService.reload();
  }

  ngOnInit(): void {
    this.getClientes();

    this.windowTitleService.setWindowTitle(this.windowTitle);
  }

}
