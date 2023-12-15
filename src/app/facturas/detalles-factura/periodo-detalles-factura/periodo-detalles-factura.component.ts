import { Component, inject, WritableSignal, signal, Input } from '@angular/core';

import { Activo } from 'src/app/interfaces/activo';
import { ActivoService } from 'src/app/services/activo.service';

import { Periodo } from 'src/app/interfaces/periodo';

@Component({
  selector: 'periodo-detalles-factura',
  templateUrl: './periodo-detalles-factura.component.html',
  styleUrls: ['./periodo-detalles-factura.component.css']
})
export class PeriodoDetallesFacturaComponent {

  private activoService = inject(ActivoService);

  activosArray: WritableSignal<Activo[]> = signal([]);

  @Input()
  periodoItem!: Periodo;

  getActivos(): void {
    this.activoService.getActivosByPeriodo(this.periodoItem.id_periodo).subscribe(activosReturned => this.activosArray.set(activosReturned));
  }

  ngOnInit(): void {
    this.getActivos();
  }
}
