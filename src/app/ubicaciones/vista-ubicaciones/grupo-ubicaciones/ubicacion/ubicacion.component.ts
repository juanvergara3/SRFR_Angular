import { Component, Input, inject } from '@angular/core';

import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { UbicacionService } from 'src/app/services/ubicacion.service';

@Component({
  selector: 'ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent {

  private ubicacionService = inject(UbicacionService);

  @Input()
  ubicacionItem!: Ubicacion;

  ngOnInit(): void { }

}
