import { Component, inject, WritableSignal, signal, Input } from '@angular/core';

import { Responsable } from 'src/app/interfaces/responsable';
import { ResponsableService } from 'src/app/services/responsable.service';

import { Activo } from 'src/app/interfaces/activo';
import { ActivoService } from 'src/app/services/activo.service';

import { Entrega } from 'src/app/interfaces/entrega';

@Component({
  selector: 'entrega-detalles-ubicacion',
  templateUrl: './entrega-detalles-ubicacion.component.html',
  styleUrls: ['./entrega-detalles-ubicacion.component.css']
})
export class EntregaDetallesUbicacionComponent {

  private responsableService = inject(ResponsableService);
  private activoService = inject(ActivoService);

  responsableSignal: WritableSignal<Responsable> = signal({}) as WritableSignal<Responsable>;

  activosArray: WritableSignal<Activo[]> = signal([]);

  @Input()
  entregaItem!: Entrega;

  getResponsable(): void {
    this.responsableService.getResponsableById(this.entregaItem.id_responsable).subscribe(responsableReturned => this.responsableSignal.set(responsableReturned));
  }

  getActivos(): void {
    this.activoService.getActivosByEntrega(this.entregaItem.id_entrega).subscribe(activosReturned => this.activosArray.set(activosReturned));
  }

  ngOnInit(): void {
    this.getActivos();
    this.getResponsable();
  }
}
