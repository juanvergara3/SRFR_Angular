import { Component, inject, Input, signal, WritableSignal } from '@angular/core';

import { EntregaService } from 'src/app/services/entrega.service';

import { Responsable } from 'src/app/interfaces/responsable';
import { ResponsableService } from 'src/app/services/responsable.service';

import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { UbicacionService } from 'src/app/services/ubicacion.service';

@Component({
  selector: 'modales-detalles-activo',
  templateUrl: './modales-detalles-activo.component.html',
  styleUrls: ['./modales-detalles-activo.component.css']
})
export class ModalesDetallesActivoComponent {

  private entregaService = inject(EntregaService);
  private responsableService = inject(ResponsableService);
  private ubicacionService = inject(UbicacionService);

  responsablesArray: WritableSignal<Responsable[]> = signal([]);
  ubicacionesArray: WritableSignal<Ubicacion[]> = signal([]);

  @Input()
  idActivo!: number;
  idResponsable: number = 0;
  idUbicacion: number = 0;
  fechaEntrega: string = '';
  fechaDevolucion?: string = '';

  getResponsables(): void {
    this.responsableService.getResponsables().subscribe(responsablesReturned => this.responsablesArray.set(responsablesReturned));
  }

  getUbicaciones(): void {
    this.ubicacionService.getUbicaciones().subscribe(ubicacionesReturned => this.ubicacionesArray.set(ubicacionesReturned));
  }

  submitNewEntrega() {
      this.entregaService.newEntrega(this.idActivo, this.idResponsable, this.idUbicacion, this.fechaEntrega, this.fechaDevolucion);

      this.clearSelections();
  }

  clearSelections() {
    this.idResponsable = 0;
    this.idUbicacion = 0;
    this.fechaEntrega = '';
    this.fechaDevolucion = '';
  }

  ngOnInit(): void {
    this.getResponsables();
    this.getUbicaciones();
  }
}
