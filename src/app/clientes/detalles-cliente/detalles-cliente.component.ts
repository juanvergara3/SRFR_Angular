import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cliente } from 'src/app/interfaces/cliente';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'detalles-cliente',
  templateUrl: './detalles-cliente.component.html',
  styleUrls: ['./detalles-cliente.component.css']
})
export class DetallesClienteComponent implements OnInit {

  public windowTitleService = inject(WindowTitleService);
  public activatedRoute = inject(ActivatedRoute);

  windowTitle = `Detalles cliente`;

  clienteItem!: Cliente;

  ngOnInit(): void {
    this.windowTitleService.setWindowTitle(this.windowTitle);

    this.clienteItem = history.state as Cliente;
  }
}
