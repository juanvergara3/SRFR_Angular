import { Component, OnInit } from '@angular/core';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {

  constructor(public windowTitleService: WindowTitleService) { }

  listOfItems = [
    {
      sn: 'ABCD-1234-EFGH-5678',
      tipo: 'UPS',
      marca: 'Tristar',
      modelo: 'Eaton E',
      estado: 'Rentado',
      colorEstado: '7fba00',
      fechaInicio: '03-05-2023',
      fechaFin: '02-06-2023',
      cliente: 'Comercializadora textil Coltex Ltda.'
    }
  ];

  windowTitle = `Pendientes(${this.listOfItems.length})`;

  incrementDate(date:string) { //buscar una forma más eficiente de hacer esto

    let month:number = +(date.substring(3, 5));

    month++;

    if(month < 10){
      return date.substring(0, 3) + '0' + month + date.substring(5);
    } else {
      return date.substring(0, 3) + month + date.substring(5);
    }
  }

  ngOnInit(): void {
    this.windowTitleService.setWindowTitle(this.windowTitle);
  }
}
