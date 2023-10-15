import { Component, Input, inject } from '@angular/core';

import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  private clienteService = inject(ClienteService);

  @Input()
  clienteItem!: Cliente;

}
