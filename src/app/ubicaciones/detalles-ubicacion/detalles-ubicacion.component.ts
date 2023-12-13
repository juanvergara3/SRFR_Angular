import { Component, OnInit, inject, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Ubicacion } from 'src/app/interfaces/ubicacion';

import { Entrega } from 'src/app/interfaces/entrega';
import { EntregaService } from 'src/app/services/entrega.service';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'detalles-ubicacion',
  templateUrl: './detalles-ubicacion.component.html',
  styleUrls: ['./detalles-ubicacion.component.css']
})
export class DetallesUbicacionComponent implements OnInit {

  private entregaService = inject(EntregaService);

  public windowTitleService = inject(WindowTitleService);
  public activatedRoute = inject(ActivatedRoute);

  entregasArray: WritableSignal<Entrega[]> = signal([]);

  ubicacionItem!: Ubicacion;

  windowTitle = `Detalles ubicación`;

  getEntregas(): void {
    this.entregaService.getEntregasByUbicacion(this.ubicacionItem.id_ubicacion).subscribe(entregasReturned => this.entregasArray.set(entregasReturned));
  }

  ngOnInit(): void {
    this.ubicacionItem =  history.state as Ubicacion;

    this.getEntregas();

    this.windowTitleService.setWindowTitle(this.windowTitle);
  }
}
