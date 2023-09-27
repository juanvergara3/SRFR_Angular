import { Component, OnInit } from '@angular/core';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'detalles-factura',
  templateUrl: './detalles-factura.component.html',
  styleUrls: ['./detalles-factura.component.css']
})
export class DetallesFacturaComponent implements OnInit {

  windowTitle = `Detalles factura`;

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

  constructor (public windowTitleService: WindowTitleService) {}

  ngOnInit(): void {
    this.windowTitleService.setWindowTitle(this.windowTitle);
  }
}
