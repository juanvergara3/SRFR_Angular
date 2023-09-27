import { Component, OnInit } from '@angular/core';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'detalles-cliente',
  templateUrl: './detalles-cliente.component.html',
  styleUrls: ['./detalles-cliente.component.css']
})
export class DetallesClienteComponent implements OnInit {

  windowTitle = `Detalles cliente`;

  item = {
    nombre: 'Comercializadora textil Coltex Ltda.',
    nit: 1234567890,
    digito: 3
  }

  constructor (public windowTitleService: WindowTitleService) {}

  ngOnInit(): void {
    this.windowTitleService.setWindowTitle(this.windowTitle);
  }
}
