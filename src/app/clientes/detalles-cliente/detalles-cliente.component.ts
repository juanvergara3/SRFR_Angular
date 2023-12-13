import { Component, OnInit, inject, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cliente } from 'src/app/interfaces/cliente';

import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { UbicacionService } from 'src/app/services/ubicacion.service';

import { Entrega } from 'src/app/interfaces/entrega';
import { EntregaService } from 'src/app/services/entrega.service';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'detalles-cliente',
  templateUrl: './detalles-cliente.component.html',
  styleUrls: ['./detalles-cliente.component.css']
})
export class DetallesClienteComponent implements OnInit {

  private ubicacionService = inject(UbicacionService);
  private entregaService = inject(EntregaService);

  public windowTitleService = inject(WindowTitleService);
  public activatedRoute = inject(ActivatedRoute);

  ubicacionesArray: WritableSignal<Ubicacion[]> = signal([]);
  entregasArray: WritableSignal<Entrega[]> = signal([]);

  clienteItem!: Cliente;

  windowTitle = `Detalles cliente`;

  getUbicaciones(): void {
    this.ubicacionService.getUbicacionesByCliente(this.clienteItem.id_cliente).subscribe(ubicacionesReturned => this.ubicacionesArray.set(ubicacionesReturned));
  }

  getEntregas(): void {
    this.entregaService.getEntregasByCliente(this.clienteItem.id_cliente).subscribe(entregasReturned => this.entregasArray.set(entregasReturned));
  }

  ngOnInit(): void {
    this.windowTitleService.setWindowTitle(this.windowTitle);

    this.clienteItem = history.state as Cliente;

    this.getUbicaciones();
    this.getEntregas();
  }
}
