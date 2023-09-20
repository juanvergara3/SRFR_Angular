import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Factura } from 'src/app/interfaces/factura';

import { MessageService } from './message.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private apiService: ApiService, private messageService: MessageService) { }

  getFacturas(): Observable<Factura[]> {
      const facturasArrayObservableHttp = this.apiService.getFacturas();
      
      this.messageService.add('FacturaService: Facturas obtenidas con éxito :)');

      return facturasArrayObservableHttp;
  }
}
