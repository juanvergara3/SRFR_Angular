import { Component } from '@angular/core';

@Component({
  selector: 'detalles-cliente',
  templateUrl: './detalles-cliente.component.html',
  styleUrls: ['./detalles-cliente.component.css']
})
export class DetallesClienteComponent {
  item = {
    nombre: 'Comercializadora textil Coltex Ltda.',
    nit: 1234567890,
    digito: 3
  }
}
