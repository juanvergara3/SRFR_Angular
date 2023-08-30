import { Component } from '@angular/core';

@Component({
  selector: 'vista-ubicaciones',
  templateUrl: './vista-ubicaciones.component.html',
  styleUrls: ['./vista-ubicaciones.component.css']
})
export class VistaUbicacionesComponent {

  item = {
    nombre:'Moft Mayorca local 204',
    direccion:'Cl. 51 Sur #48-57 PISO 3, Sabaneta, Antioquia',
    telefono:'3094848'
  }

  showGroup: boolean = true;

  collapse(){
    this.showGroup = !this.showGroup;
  }

}
