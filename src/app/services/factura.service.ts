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
}
