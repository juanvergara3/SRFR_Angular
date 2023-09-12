import { Component, Signal, computed } from '@angular/core';

import { Factura } from 'src/app/interfaces/factura';
import { FacturaService } from 'src/app/services/factura.service';

import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'vista-facturas',
  templateUrl: './vista-facturas.component.html',
  styleUrls: ['./vista-facturas.component.css']
})
export class VistaFacturasComponent {
    facturasArray: Factura[] = [];

    filterText: Signal<string> = computed( 
        () => this.searchBarService.searchTextSignal().replace(/^\D+/g, '')
        );

    filteredFacturasArray: Signal<Factura[]> = computed(
        () => this.facturasArray.filter( 
            factura => factura?.numero.toString().includes(this.filterText()) 
            )
        );

    constructor(private facturaService: FacturaService, public searchBarService: SearchBarService) { }

    getFacturas(): void {
        this.facturaService.getFacturas().subscribe(facturasReturned => this.facturasArray = facturasReturned);
    }

    ngOnInit(): void {
        this.getFacturas();
    }

    //totalItemNumber: number = this.listOfItems.length;
}
