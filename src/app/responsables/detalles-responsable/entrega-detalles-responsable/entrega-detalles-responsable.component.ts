import { Component, inject, WritableSignal, signal, Input } from '@angular/core';

import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { UbicacionService } from 'src/app/services/ubicacion.service';

import { Activo } from 'src/app/interfaces/activo';
import { ActivoService } from 'src/app/services/activo.service';

import { Entrega } from 'src/app/interfaces/entrega';

@Component({
  selector: 'entrega-detalles-responsable',
  templateUrl: './entrega-detalles-responsable.component.html',
  styleUrls: ['./entrega-detalles-responsable.component.css']
})
export class EntregaDetallesResponsableComponent {
  private ubicacionService = inject(UbicacionService);
  private activoService = inject(ActivoService);

  ubicacionSignal: WritableSignal<Ubicacion> = signal({}) as WritableSignal<Ubicacion>;

  activosArray: WritableSignal<Activo[]> = signal([]);

  @Input()
  entregaItem!: Entrega;

  getUbicacion(): void {
    this.ubicacionService.getUbicacionById(this.entregaItem.id_ubicacion).subscribe(ubicacionReturned => this.ubicacionSignal.set(ubicacionReturned));
  }

  getActivos(): void {
    this.activoService.getActivosByEntrega(this.entregaItem.id_entrega).subscribe(activosReturned => this.activosArray.set(activosReturned));
  }

  ngOnInit(): void {
    this.getActivos();
    this.getUbicacion();
  }
}
