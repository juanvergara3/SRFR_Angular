import { Component } from '@angular/core';

@Component({
  selector: 'item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent {
  listOfItems = [
    {
        nombre: 'Comercializadora textil Coltex Ltda.',
        nit: 1234567890,
        digito: 3
    },
    {
        nombre: 'ElectroMega S.A.',
        nit: 987654321,
        digito: null
    },
    {
        nombre: 'Distribuidora Automotriz Autoparts',
        nit: 4567890123,
        digito: 6
    },
    {
        nombre: 'Farmacias SaludPlus',
        nit: 789012345,
        digito: 1
    },
    {
        nombre: 'Inversiones Financieras CapitalCorp',
        nit: 2345678901,
        digito: 8
    },
    {
        nombre: 'Constructora EdificaTodo',
        nit: 5678901234,
        digito: 2
    },
    {
        nombre: 'Tecnología Innovatech',
        nit: 890123456,
        digito: null
    },
    {
        nombre: 'Industria Química ChemiCo',
        nit: 3456789012,
        digito: 5
    },
    {
        nombre: 'Alimentos Frescos Distribuidos',
        nit: 6789012345,
        digito: null
    },
    {
        nombre: 'Servicios Logísticos LogiTrans',
        nit: 9012345678,
        digito: null
    }
  ]

  totalItemNumber: number = this.listOfItems.length;
}
