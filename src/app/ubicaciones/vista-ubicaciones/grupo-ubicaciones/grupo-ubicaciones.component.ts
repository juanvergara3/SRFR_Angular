import { Component, Signal, computed, WritableSignal, signal, inject, Input  } from '@angular/core';

import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { UbicacionService } from 'src/app/services/ubicacion.service';

import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'grupo-ubicaciones',
  templateUrl: './grupo-ubicaciones.component.html',
  styleUrls: ['./grupo-ubicaciones.component.css']
})
export class GrupoUbicacionesComponent {

  private ubicacionService = inject(UbicacionService);

  ubicacionesArray: WritableSignal<Ubicacion[]> = signal([]);

  @Input()
  clienteItem!: Cliente;

  showGroup: boolean = true;

  collapse(){
    this.showGroup = !this.showGroup;
  }

  getUbicacionesByCliente(idCliente: number): void {
    this.ubicacionService.getUbicacionesByCliente(idCliente).subscribe(ubicacionesReturned => 
      this.ubicacionesArray.set(ubicacionesReturned)
    );
  }

  ngOnInit(): void {
    this.getUbicacionesByCliente(this.clienteItem.id_cliente);
  }

}
