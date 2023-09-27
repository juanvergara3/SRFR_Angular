import { Component, OnInit, inject } from '@angular/core';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'detalles-cliente',
  templateUrl: './detalles-cliente.component.html',
  styleUrls: ['./detalles-cliente.component.css']
})
export class DetallesClienteComponent implements OnInit {

  public windowTitleService = inject(WindowTitleService);

  windowTitle = `Detalles cliente`;

  item = {
    nombre: 'Comercializadora textil Coltex Ltda.',
    nit: 1234567890,
    digito: 3
  }

  ngOnInit(): void {
    this.windowTitleService.setWindowTitle(this.windowTitle);
  }
}
