import { Component, Input, inject } from '@angular/core';

import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { UbicacionService } from 'src/app/services/ubicacion.service';


@Component({
  selector: 'ubicacion-detalles-cliente',
  templateUrl: './ubicacion-detalles-cliente.component.html',
  styleUrls: ['./ubicacion-detalles-cliente.component.css']
})
export class UbicacionDetallesClienteComponent {

  private ubicacionService = inject(UbicacionService);

  @Input()
  ubicacionItem!: Ubicacion;

}
