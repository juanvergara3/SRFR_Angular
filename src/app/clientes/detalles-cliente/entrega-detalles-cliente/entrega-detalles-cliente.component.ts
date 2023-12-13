import { Component, inject, WritableSignal, signal, Input } from '@angular/core';

import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { UbicacionService } from 'src/app/services/ubicacion.service';

import { Responsable } from 'src/app/interfaces/responsable';
import { ResponsableService } from 'src/app/services/responsable.service';

import { Activo } from 'src/app/interfaces/activo';
import { ActivoService } from 'src/app/services/activo.service';

import { Entrega } from 'src/app/interfaces/entrega';

@Component({
  selector: 'entrega-detalles-cliente',
  templateUrl: './entrega-detalles-cliente.component.html',
  styleUrls: ['./entrega-detalles-cliente.component.css']
})
export class EntregaDetallesClienteComponent {

  private responsableService = inject(ResponsableService);
  private ubicacionService = inject(UbicacionService);
  private activoService = inject(ActivoService);

  responsableSignal: WritableSignal<Responsable> = signal({}) as WritableSignal<Responsable>;
  ubicacionSignal: WritableSignal<Ubicacion> = signal({}) as WritableSignal<Ubicacion>;

  activosArray: WritableSignal<Activo[]> = signal([]);

  @Input()
  entregaItem!: Entrega;

  getUbicacion(): void {
    this.ubicacionService.getUbicacionById(this.entregaItem.id_ubicacion).subscribe(ubicacionReturned => this.ubicacionSignal.set(ubicacionReturned));
  }

  getResponsable(): void {
    this.responsableService.getResponsableById(this.entregaItem.id_responsable).subscribe(responsableReturned => this.responsableSignal.set(responsableReturned));
  }

  getActivos(): void {
    this.activoService.getActivosByEntrega(this.entregaItem.id_entrega).subscribe(activosReturned => this.activosArray.set(activosReturned));
  }

  ngOnInit(): void {
    this.getActivos();
    this.getUbicacion();
    this.getResponsable();
  }
}
