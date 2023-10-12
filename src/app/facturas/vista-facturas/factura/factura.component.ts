import { Component, Input, Output, inject } from '@angular/core';

import { Factura } from 'src/app/interfaces/factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {

  private facturaService = inject(FacturaService);

  editing: boolean = false; 
  
  numeroFactura!: number;
  fechaGeneracion!: string;

  @Input()
  facturaItem!: Factura;

  ngOnInit(): void {
    this.numeroFactura = this.facturaItem.numero_factura;
    this.fechaGeneracion = this.facturaItem.fecha_generacion;
  }

  submitEditFactura() {
    this.facturaService.editFactura(this.facturaItem.id_factura, this.numeroFactura, this.fechaGeneracion);

    this.facturaItem.numero_factura = this.numeroFactura;
    this.facturaItem.fecha_generacion = this.fechaGeneracion;

    this.editing = false;
  }

  resetValues() {
    this.numeroFactura = this.facturaItem.numero_factura;
    this.fechaGeneracion = this.facturaItem.fecha_generacion;

    this.editing = false;
  }
}
