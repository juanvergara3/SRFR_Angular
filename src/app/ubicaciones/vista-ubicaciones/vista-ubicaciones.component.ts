import { Component, Signal, computed, signal, WritableSignal } from '@angular/core';

import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { UbicacionService } from 'src/app/services/ubicacion.service';

import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'vista-ubicaciones',
  templateUrl: './vista-ubicaciones.component.html',
  styleUrls: ['./vista-ubicaciones.component.css']
})
export class VistaUbicacionesComponent {

  ubicacionesArray: WritableSignal<Ubicacion[]> = signal([]);
  clientesArray: WritableSignal<Cliente[]> = signal([]);

  orderedContent: {index: number, cliente: Cliente, ubicaciones: Ubicacion[] }[] = [];

  //orderedContent: Signal<{index: number, cliente: Cliente, ubicaciones: Ubicacion[] }[]> =  computed(() => {
    //return 
  //});

  filteredClientesArray: Signal<Cliente[]> = computed(() => 
  this.clientesArray().filter(cliente => 
      cliente?.nombre.toLowerCase().includes(this.filterText()) || 
      cliente?.nit.toString().includes(this.filterText())
    )
  );

  showGroup: boolean[] = [];

  filterText: Signal<string> = computed( 
    () => this.searchBarService.searchTextSignal().toLocaleLowerCase()
  );

  constructor(private ubicacionService: UbicacionService, private clienteService: ClienteService, public searchBarService: SearchBarService) { }

  getUbicaciones(): void {
    this.ubicacionService.getUbicaciones().subscribe(ubicacionesReturned => this.ubicacionesArray.set(ubicacionesReturned));
  }

  getClientes(): void {
    this.clienteService.getClientes().subscribe(clientesReturned => this.clientesArray.set(clientesReturned));
  }

  orderContent(): void { // esta función debe ser reemplazada por una querry de sql, esto es demasiado lento y añade mucha complejidad.

    let index: number = 0;
    let cliente: Cliente;
    let ubicaciones: Ubicacion[] = [];

    for(let i = 0, id:number; i < this.clientesArray.length; i++){
      
      id = this.clientesArray()[i].id_cliente;

      for(let j = 0; j < this.ubicacionesArray.length; j++){
        if(this.ubicacionesArray()[j].id_cliente == id){
          ubicaciones.push(this.ubicacionesArray()[j]);
        }
      }

      if(ubicaciones.length != 0){

        cliente = this.clientesArray()[i];

        //this.orderedContent.push({index, cliente, ubicaciones});
        index++;
        ubicaciones = [];
      }
    }

    for(let i = 0; i < this.orderedContent.length; i++){
      this.showGroup.push(true);
    }
  }

  ngOnInit(): void {
    this.getClientes();
    this.getUbicaciones();
    this.orderContent();
  }

  collapse(index: number){
    this.showGroup[index] = !this.showGroup[index];
  }
}
