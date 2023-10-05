import { state } from '@angular/animations';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Factura } from 'src/app/interfaces/factura';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'detalles-factura',
  templateUrl: './detalles-factura.component.html',
  styleUrls: ['./detalles-factura.component.css']
})
export class DetallesFacturaComponent implements OnInit {

  public windowTitleService = inject(WindowTitleService);
  public activatedRoute = inject(ActivatedRoute);

  windowTitle = `Detalles factura`;

  facturaItem!: Factura;

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
    this.windowTitleService.setWindowTitle(this.windowTitle);

    this.facturaItem = history.state as Factura;
  }
}
