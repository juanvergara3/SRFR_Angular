import { Component, Input } from '@angular/core';

@Component({
  selector: 'grupo-activos',
  templateUrl: './grupo-activos.component.html',
  styleUrls: ['./grupo-activos.component.css']
})
export class GrupoActivosComponent {

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

  showGroup: boolean = true;

  collapse(){
    this.showGroup = !this.showGroup;
  }

  totalItemNumber: number = this.listOfItems.length;
}
