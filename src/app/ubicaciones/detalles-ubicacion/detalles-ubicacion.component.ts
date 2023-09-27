import { Component, OnInit } from '@angular/core';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'detalles-ubicacion',
  templateUrl: './detalles-ubicacion.component.html',
  styleUrls: ['./detalles-ubicacion.component.css']
})
export class DetallesUbicacionComponent implements OnInit {

  windowTitle = `Detalles ubicación`;

  item = {
    nombre:'Moft Mayorca local 204',
    direccion:'Cl. 51 Sur #48-57 PISO 3, Sabaneta, Antioquia',
    telefono:'3094848'
  }

  constructor (public windowTitleService: WindowTitleService) {}

  ngOnInit(): void {
    this.windowTitleService.setWindowTitle(this.windowTitle);
  }
}
