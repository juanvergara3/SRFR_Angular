import { Component } from '@angular/core';

@Component({
  selector: 'vista-activos',
  templateUrl: './vista-activos.component.html',
  styleUrls: ['./vista-activos.component.css']
})
export class VistaActivosComponent {
  listOfItems = [
    {
        sn:'ABCD-1234-EFGH-5678',
        tipo:'tipo',
        marca:'marca',
        modelo:'modelo',
        estado:'estado',
        colorEstado:'7fba00',
        grupo:1
    }
  ]

  totalItemNumber: number = this.listOfItems.length;
}
