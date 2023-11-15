import { Component, inject, WritableSignal, signal, Input } from '@angular/core';

import { Factura } from 'src/app/interfaces/factura';
import { FacturaService } from 'src/app/services/factura.service';

import { Periodo } from 'src/app/interfaces/periodo';

@Component({
  selector: 'periodo-detalles-activo',
  templateUrl: './periodo-detalles-activo.component.html',
  styleUrls: ['./periodo-detalles-activo.component.css']
})
export class PeriodoDetallesActivoComponent {

  private facturaService = inject(FacturaService);

  facturaSignal: WritableSignal<Factura> = signal({}) as WritableSignal<Factura>;

  @Input()
  periodoItem!: Periodo;

  getFactura(): void {
    this.facturaService.getFacturaById(this.periodoItem.id_factura).subscribe(facturaReturned =>
      this.facturaSignal.set(facturaReturned)
    );
  }

  ngOnInit(): void {
    this.getFactura();
  }
}
