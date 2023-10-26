import { Component, OnInit, inject, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cliente } from 'src/app/interfaces/cliente';

import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { UbicacionService } from 'src/app/services/ubicacion.service';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'detalles-cliente',
  templateUrl: './detalles-cliente.component.html',
  styleUrls: ['./detalles-cliente.component.css']
})
export class DetallesClienteComponent implements OnInit {

  public windowTitleService = inject(WindowTitleService);
  public activatedRoute = inject(ActivatedRoute);
  private ubicacionService = inject(UbicacionService);

  windowTitle = `Detalles cliente`;

  ubicacionesArray: WritableSignal<Ubicacion[]> = signal([]);

  clienteItem!: Cliente;

  getUbicaciones(idCliente: number): void {
    this.ubicacionService.getUbicacionesByCliente(idCliente).subscribe(ubicacionesReturned => 
      this.ubicacionesArray.set(ubicacionesReturned)
    );
  }

  ngOnInit(): void {
    this.windowTitleService.setWindowTitle(this.windowTitle);

    this.clienteItem = history.state as Cliente;

    this.getUbicaciones(this.clienteItem.id_cliente);
  }
}
