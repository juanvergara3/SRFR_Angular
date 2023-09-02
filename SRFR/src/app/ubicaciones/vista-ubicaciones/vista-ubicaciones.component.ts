import { Component } from '@angular/core';

import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { UbicacionService } from 'src/app/services/ubicacion.service';

import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'vista-ubicaciones',
  templateUrl: './vista-ubicaciones.component.html',
  styleUrls: ['./vista-ubicaciones.component.css']
})
export class VistaUbicacionesComponent {

  ubicacionesArray: Ubicacion[] = [];
  clientesArray: Cliente[] = [];

  orderedContent: {index: number, cliente: Cliente, ubicaciones: Ubicacion[] }[] = [];

  showGroup: boolean[] = [];

  constructor(private ubicacionService: UbicacionService, private clienteService: ClienteService) { }

  getUbicaciones(): void {
    this.ubicacionService.getUbicaciones().subscribe(ubicacionesReturned => this.ubicacionesArray = ubicacionesReturned);
  }

  getClientes(): void {
    this.clienteService.getClientes().subscribe(clientesReturned => this.clientesArray = clientesReturned);
  }

  orderContent(): void { // esta función debe ser reemplazada por una querry de sql, esto es demasiado lento y añade mucha complejidad.

    let index: number = 0;
    let cliente: Cliente;
    let ubicaciones: Ubicacion[] = [];

    for(let i = 0, id:number; i < this.clientesArray.length; i++){
      
      id = this.clientesArray[i].id;

      for(let j = 0; j < this.ubicacionesArray.length; j++){
        if(this.ubicacionesArray[j].id_cliente == id){
          ubicaciones.push(this.ubicacionesArray[j]);
        }
      }

      if(ubicaciones.length != 0){

        cliente = this.clientesArray[i];

        this.orderedContent.push({index, cliente, ubicaciones});
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
