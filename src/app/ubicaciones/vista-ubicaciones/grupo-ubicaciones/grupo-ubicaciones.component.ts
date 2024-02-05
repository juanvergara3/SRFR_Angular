import { Component, Signal, computed, WritableSignal, signal, inject, Input, Output, EventEmitter, effect, untracked } from '@angular/core';

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
  
  @Output()
  ubicacionesAmountChanged: EventEmitter<number> = new EventEmitter<number>();

  ubicacionesAmountChangedEffect = effect(() => {
    if(this.ubicacionesArray().length != 0)
      untracked(() => {
        this.ubicacionesAmountChanged.emit(this.ubicacionesArray().length);
        this.showGroup = true;
    })
  });

  showGroup: boolean = false;

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
