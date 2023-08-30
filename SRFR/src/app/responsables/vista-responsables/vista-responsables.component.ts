import { Component } from '@angular/core';

@Component({
  selector: 'vista-responsables',
  templateUrl: './vista-responsables.component.html',
  styleUrls: ['./vista-responsables.component.css']
})
export class VistaResponsablesComponent {
  item = {
    nombre:'Catalina Bedolla',
    cedula:'2000859324',
    telefono:'3606051867',
    correo:'cata.bedolla@domain.com.co'
  }
}
