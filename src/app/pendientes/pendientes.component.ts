import { Component, Signal, computed, signal, WritableSignal, inject } from '@angular/core';

import { Activo } from '../interfaces/activo';
import { ActivoService } from '../services/activo.service';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent {

  public activoService = inject(ActivoService);

  public windowTitleService = inject(WindowTitleService);

  activosPendientesArray: WritableSignal<Activo[]> = signal([]);

  windowTitle = `Pendientes`;

  getActivosPendientes(): void {
    this.activoService.getActivosPendientes().subscribe(activosPendientesReturned => this.activosPendientesArray.set(activosPendientesReturned));
  }

  ngOnInit(): void {
    this.getActivosPendientes();

    this.windowTitleService.setWindowTitle(this.windowTitle);
  }
}
