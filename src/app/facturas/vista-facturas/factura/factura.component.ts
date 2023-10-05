import { Component, Input } from '@angular/core';

import { Factura } from 'src/app/interfaces/factura';

@Component({
  selector: 'factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {

  @Input()
  facturaItem!: Factura;
}
