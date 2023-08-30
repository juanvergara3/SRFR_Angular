import { Component } from '@angular/core';

@Component({
  selector: 'detalles-ubicacion',
  templateUrl: './detalles-ubicacion.component.html',
  styleUrls: ['./detalles-ubicacion.component.css']
})
export class DetallesUbicacionComponent {
  item = {
    nombre:'Moft Mayorca local 204',
    direccion:'Cl. 51 Sur #48-57 PISO 3, Sabaneta, Antioquia',
    telefono:'3094848'
  }
}
