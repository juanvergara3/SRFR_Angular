import { Component } from '@angular/core';

import { Factura } from 'src/app/interfaces/factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'vista-facturas',
  templateUrl: './vista-facturas.component.html',
  styleUrls: ['./vista-facturas.component.css']
})
export class VistaFacturasComponent {

    facturasArray: Factura[] = [];

    constructor(private facturaService: FacturaService) { }

    getFacturas(): void {
        this.facturaService.getFacturas().subscribe(facturasReturned => this.facturasArray = facturasReturned);
    }

    ngOnInit(): void {
        this.getFacturas();
    }

    //totalItemNumber: number = this.listOfItems.length;
}
