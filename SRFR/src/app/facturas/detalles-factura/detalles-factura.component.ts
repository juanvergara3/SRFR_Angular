import { Component } from '@angular/core';

@Component({
  selector: 'detalles-factura',
  templateUrl: './detalles-factura.component.html',
  styleUrls: ['./detalles-factura.component.css']
})
export class DetallesFacturaComponent {
  item = {
    "numero": 1234,
    "fecha": '2023-08-21'
  };

  activoItem = {
    sn:'ABCD-1234-EFGH-5678',
    tipo:'tipo',
    marca:'marca',
    modelo:'modelo',
    estado:'estado',
    colorEstado:'7fba00',
    grupo:1
  }
}
