import { Component } from '@angular/core';

@Component({
  selector: 'vista-facturas',
  templateUrl: './vista-facturas.component.html',
  styleUrls: ['./vista-facturas.component.css']
})
export class VistaFacturasComponent {
  listOfItems = [
    {
        "numero": 1234,
        "fecha": '2023-08-21'
    },
    {
        "numero": 5678,
        "fecha": '2023-08-22'
    },
    {
        "numero": 9101,
        "fecha": '2023-08-23'
    },
    {
        "numero": 2345,
        "fecha": '2023-08-24'
    },
    {
        "numero": 6789,
        "fecha": '2023-08-25'
    },
    {
        "numero": 1122,
        "fecha": '2023-08-26'
    },
    {
        "numero": 3456,
        "fecha": '2023-08-27'
    },
    {
        "numero": 7890,
        "fecha": '2023-08-28'
    },
    {
        "numero": 5432,
        "fecha": '2023-08-29'
    },
    {
        "numero": 8765,
        "fecha": '2023-08-30'
    }
  ]

  totalItemNumber: number = this.listOfItems.length;
}
