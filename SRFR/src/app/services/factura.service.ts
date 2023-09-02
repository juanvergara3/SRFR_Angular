import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Factura } from 'src/app/interfaces/factura';
import { facturasPlaceholderArray } from 'src/app/placeholder_data/placeholder-facturas';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private messageService: MessageService) { }

  getFacturas(): Observable<Factura[]> {
    const facturasArrayObservable = of(facturasPlaceholderArray);

    this.messageService.add('FacturaService: Facturas obtenidas con éxito.');

    return facturasArrayObservable;
  }
}
