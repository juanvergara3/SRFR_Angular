import { Component, Signal, computed, signal, WritableSignal, inject, effect, untracked } from '@angular/core';

import { Activo } from '../interfaces/activo';
import { ActivoService } from '../services/activo.service';

import { Factura } from '../interfaces/factura';
import { FacturaService } from '../services/factura.service';

import { PeriodoService } from '../services/periodo.service';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent {

  public activoService = inject(ActivoService);
  public facturaService = inject(FacturaService);
  public periodoService = inject(PeriodoService);

  public windowTitleService = inject(WindowTitleService);
  windowTitle = `Pendientes`;

  windowTitleEffect = effect(() => {
    if(this.activosPendientesArray().length != 0)
      untracked(() => 
        this.windowTitleService.setWindowTitle(
          this.windowTitle.concat(`(${this.activosPendientesArray().length})`)
        )
      );
    }
  );

  // activos
  activosPendientesArray: WritableSignal<Activo[]> = signal([]);
  activosSeleccionados: Activo[] = [];

  // fechas
  globalDate: WritableSignal<string> = signal('');
  globalDateIncremented: WritableSignal<string> = signal('');
  globalDateIncrementComputed: Signal<string> = computed(() => {
    if(this.globalDateIncremented() != '')
      return this.globalDateIncremented()
    if(this.globalDate() == '')
      return '';
    return this.incrementDate(this.globalDate());
  });
  dateOverride: boolean = false;

  // facturas
  latestFacturasArray: WritableSignal<Factura[]> = signal([]);
  selectedFactura!: number;
  selectedFacturaEffect = effect(() => {
    if(this.latestFacturasArray().length != 0)
      this.selectedFactura = this.latestFacturasArray()[0].id_factura;
  });

  toggleDateOverride(): void {
    this.dateOverride = !this.toggleDateOverride;
  }

  actualizarSeleccion(activo: Activo, isChecked: boolean): void {
    if(isChecked)
      this.activosSeleccionados.push(activo);
    else
    this.activosSeleccionados = this.activosSeleccionados.filter(item => activo != item)
  }

  getActivosPendientes(): void {
    this.activoService.getActivosPendientes().subscribe(activosPendientesReturned => this.activosPendientesArray.set(activosPendientesReturned));
  }

  getFacturas(cantidad: number): void {
    this.facturaService.getLatestFacturas(cantidad).subscribe(facturasReturned => this.latestFacturasArray.set(facturasReturned));
  }

  incrementDate(dateString:string): string {
    if(dateString != undefined) {
      let date = new Date(dateString);

      date.setMonth(date.getMonth() + 1);
      date.setDate(date.getDate() - 1);

      return date.toISOString().substring(0, 10);
    }
    return '';
  }

  facturar() {
    let ids: number[] = []; 

    for (const activo of this.activosSeleccionados)
      ids.push(activo.id_activo);

    this.periodoService.newPeriodosBulk(this.selectedFactura, this.globalDate(), this.globalDateIncrementComputed(), ids);
  }

  ngOnInit(): void {
    this.getActivosPendientes();
    this.getFacturas(5);

    this.windowTitleService.setWindowTitle(this.windowTitle);
  }
}
