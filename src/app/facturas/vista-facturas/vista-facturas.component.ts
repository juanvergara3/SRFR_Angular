import { Component, Signal, computed, WritableSignal, signal } from '@angular/core';

import { Factura } from 'src/app/interfaces/factura';
import { FacturaService } from 'src/app/services/factura.service';

import { SearchBarService } from 'src/app/services/search-bar.service';
import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'vista-facturas',
  templateUrl: './vista-facturas.component.html',
  styleUrls: ['./vista-facturas.component.css']
})
export class VistaFacturasComponent {

    facturasArray: WritableSignal<Factura[]> = signal([]);

    windowTitle = `Facturas(${this.facturasArray().length})`;

    filterText: Signal<string> = computed(() => {
        return this.searchBarService.searchTextSignal().replace(/^\D+/g, '')
    });

    filteredFacturasArray: Signal<Factura[]> = computed(() => 
        this.facturasArray().filter(factura =>
            factura?.numero_factura.toString().includes(this.filterText())
        )
    );

    constructor(private facturaService: FacturaService, public searchBarService: SearchBarService, public windowTitleService: WindowTitleService) { }

    getFacturas(): void{
        this.facturaService.getFacturas().subscribe(facturasReturned => 
            this.facturasArray.set(facturasReturned)
        );
    }

    ngOnInit(): void {
        this.getFacturas();

        this.windowTitleService.setWindowTitle(this.windowTitle);
    }

    //totalItemNumber: number = this.listOfItems.length;
}
