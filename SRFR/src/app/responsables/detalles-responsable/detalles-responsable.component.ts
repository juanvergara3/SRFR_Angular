import { Component } from '@angular/core';

@Component({
  selector: 'detalles-responsable',
  templateUrl: './detalles-responsable.component.html',
  styleUrls: ['./detalles-responsable.component.css']
})
export class DetallesResponsableComponent {
  item = {
    nombre:'Catalina Bedolla',
    cedula:'2000859324',
    telefono:'3606051867',
    correo:'cata.bedolla@domain.com.co'
  }
}
