import { Component, Signal, computed, WritableSignal, signal, inject } from '@angular/core';

import { Factura } from 'src/app/interfaces/factura';
import { FacturaService } from 'src/app/services/factura.service';

import { SearchBarService } from 'src/app/services/search-bar.service';
import { WindowTitleService } from 'src/app/services/window-title.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'vista-facturas',
  templateUrl: './vista-facturas.component.html',
  styleUrls: ['./vista-facturas.component.css']
})
export class VistaFacturasComponent {

    private facturaService = inject(FacturaService);
    public searchBarService = inject(SearchBarService);
    public windowTitleService = inject(WindowTitleService);
    private routerService = inject(RouterService);

    windowTitle = 'Facturas';

    filterText: Signal<string> = computed(() => 
        this.searchBarService.searchTextSignal().replace(/^\D+/g, '')
    );

    facturasArray: WritableSignal<Factura[]> = signal([]);

    filteredFacturasArray: Signal<Factura[]> = computed(() => 
         this.facturasArray().filter(factura =>
            factura?.numero_factura.toString().includes(this.filterText())
        )
    );

    getFacturas(): void{
        this.facturaService.getFacturas().subscribe(facturasReturned => 
            this.facturasArray.set(facturasReturned)
        );
    }
    
    refresh(){
        this.routerService.reload();
    }

    ngOnInit(): void {
        this.getFacturas();

        this.windowTitleService.setWindowTitle(this.windowTitle);
    }
    
}
