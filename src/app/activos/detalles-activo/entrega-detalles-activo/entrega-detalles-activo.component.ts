import { Component, inject, WritableSignal, signal, Input, Signal, computed} from '@angular/core';

import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { UbicacionService } from 'src/app/services/ubicacion.service';

import { Responsable } from 'src/app/interfaces/responsable';
import { ResponsableService } from 'src/app/services/responsable.service';

import { Entrega } from 'src/app/interfaces/entrega';

@Component({
  selector: 'entrega-detalles-activo',
  templateUrl: './entrega-detalles-activo.component.html',
  styleUrls: ['./entrega-detalles-activo.component.css']
})
export class EntregaDetallesActivoComponent {

  private ubicacionService = inject(UbicacionService);
  private responsableService = inject(ResponsableService);
  private clienteService = inject(ClienteService);

  ubicacionSignal: WritableSignal<Ubicacion> = signal({}) as WritableSignal<Ubicacion>;
  responsableSignal: WritableSignal<Responsable> = signal({}) as WritableSignal<Responsable>;
  clienteSignal: WritableSignal<Cliente> = signal({}) as WritableSignal<Cliente>;

  clienteComputed: Signal<Cliente> = computed(() => {
    let id = this.ubicacionSignal().id_cliente;

    if(id != undefined)
      this.clienteService.getClienteById(this.ubicacionSignal().id_cliente).subscribe(clienteReturned =>
        this.clienteSignal.set(clienteReturned)
      );

      return this.clienteSignal();
    }
  );

  @Input()
  entregaItem!: Entrega;

  getUbicacion(): void {
    this.ubicacionService.getUbicacionById(this.entregaItem.id_ubicacion).subscribe(ubicacionReturned =>
      this.ubicacionSignal.set(ubicacionReturned)
    );
  }

  getResponsable(): void {
    this.responsableService.getResponsableById(this.entregaItem.id_responsable).subscribe(responsableReturned =>
      this.responsableSignal.set(responsableReturned)
    );
  }

  ngOnInit(): void {
    this.getUbicacion();
    this.getResponsable();
  }
}
