import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Ubicacion } from 'src/app/interfaces/ubicacion';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'detalles-ubicacion',
  templateUrl: './detalles-ubicacion.component.html',
  styleUrls: ['./detalles-ubicacion.component.css']
})
export class DetallesUbicacionComponent implements OnInit {

  public windowTitleService = inject(WindowTitleService);
  public activatedRoute = inject(ActivatedRoute);

  windowTitle = `Detalles ubicación`;

  ubicacionItem!: Ubicacion;

  ngOnInit(): void {
    this.windowTitleService.setWindowTitle(this.windowTitle);

    this.ubicacionItem =  history.state as Ubicacion;
  }
}
