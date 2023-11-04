import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Factura } from 'src/app/interfaces/factura';

import { MessageService } from './message.service';
import { ApiService } from './api.service';
import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private apiService = inject(ApiService);
  private router = inject(RouterService);
  private messageService = inject(MessageService);

  url: string = this.router.getRoute();

  getFacturas(): Observable<Factura[]> {

    const facturasArrayObservable = this.apiService.getRequest(this.url) as Observable<Factura[]>;
    
    this.messageService.add('FacturaService: Facturas obtenidas con éxito :)');

    return facturasArrayObservable;
  }

  getFacturaById(idFactura: number): Observable<Factura> {

    return this.apiService.getRequest(`http://localhost:3000/facturas/p/`, {name: 'id_factura', value: idFactura}) as Observable<Factura>;
  }

  newFactura(numeroFactura: number, fechaGeneracion: string) {

    let response = this.apiService.postRequest(this.url, {numero_factura: numeroFactura, fecha_generacion: fechaGeneracion});

    response.subscribe((data) => 
      this.messageService.add(data.toString())
    );
  }

  editFactura(idFactura:number, numeroFactura?: number, fechaGeneracion?: string){

    let response = this.apiService.patchRequest(this.url, {id_factura:idFactura, numero_factura: numeroFactura, fecha_generacion: fechaGeneracion});

    response.subscribe((data) => 
      this.messageService.add(data.toString())
    );

  }
}
