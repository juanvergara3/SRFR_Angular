import { Component, inject, Output, EventEmitter } from '@angular/core';

import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'modales-vista-facturas',
  templateUrl: './modales-vista-facturas.component.html',
  styleUrls: ['./modales-vista-facturas.component.css']
})
export class ModalesVistaFacturasComponent {

  private facturaService = inject(FacturaService);

  @Output() 
  modalSubmited = new EventEmitter();

  idFactura!: number;
  numeroFactura!: number;
  fechaGeneracion: string = '';

  submitNewFactura() {
      this.facturaService.newFactura(this.numeroFactura, this.fechaGeneracion);
      this.modalSubmited.emit();
  }
}
