import { Component, OnInit, inject, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Factura } from 'src/app/interfaces/factura';

import { Periodo } from 'src/app/interfaces/periodo';
import { PeriodoService } from 'src/app/services/periodo.service';

import { Activo } from 'src/app/interfaces/activo';
import { ActivoService } from 'src/app/services/activo.service';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'detalles-factura',
  templateUrl: './detalles-factura.component.html',
  styleUrls: ['./detalles-factura.component.css']
})
export class DetallesFacturaComponent implements OnInit {

  private periodoService = inject(PeriodoService);
  //private activoService = inject(ActivoService);

  public windowTitleService = inject(WindowTitleService);
  public activatedRoute = inject(ActivatedRoute);

  periodosArray: WritableSignal<Periodo[]> = signal([]);

  windowTitle = `Detalles factura`;

  facturaItem!: Factura;

  getPeriodos(): void {
    this.periodoService.getPeriodosByFactura(this.facturaItem.id_factura).subscribe(periodosReturned => this.periodosArray.set(periodosReturned));
  }

  activoItem = {
    sn:'ABCD-1234-EFGH-5678',
    tipo:'tipo',
    marca:'marca',
    modelo:'modelo',
    estado:'estado',
    colorEstado:'7fba00',
    grupo:1
  }

  ngOnInit(): void {
    this.facturaItem = history.state as Factura;

    this.getPeriodos();

    this.windowTitleService.setWindowTitle(this.windowTitle);
  }
}
