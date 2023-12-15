import { Component, OnInit, inject, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Factura } from 'src/app/interfaces/factura';

import { Periodo } from 'src/app/interfaces/periodo';
import { PeriodoService } from 'src/app/services/periodo.service';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'detalles-factura',
  templateUrl: './detalles-factura.component.html',
  styleUrls: ['./detalles-factura.component.css']
})
export class DetallesFacturaComponent implements OnInit {

  private periodoService = inject(PeriodoService);

  public windowTitleService = inject(WindowTitleService);
  public activatedRoute = inject(ActivatedRoute);

  periodosArray: WritableSignal<Periodo[]> = signal([]);

  facturaItem!: Factura;

  windowTitle = `Detalles factura`;

  getPeriodos(): void {
    this.periodoService.getPeriodosByFactura(this.facturaItem.id_factura).subscribe(periodosReturned => this.periodosArray.set(periodosReturned));
  }

  ngOnInit(): void {
    this.facturaItem = history.state as Factura;

    this.getPeriodos();

    this.windowTitleService.setWindowTitle(this.windowTitle);
  }
}
