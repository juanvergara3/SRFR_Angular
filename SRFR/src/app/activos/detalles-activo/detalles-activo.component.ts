import { Component } from '@angular/core';

@Component({
  selector: 'detalles-activo',
  templateUrl: './detalles-activo.component.html',
  styleUrls: ['./detalles-activo.component.css']
})
export class DetallesActivoComponent {
  activo = {
        sn:'ABCD-1234-EFGH-5678',
        tipo:'tipo',
        marca:'marca',
        modelo:'modelo',
        estado:'estado',
        colorEstado:'7fba00',
        facturaCompra:'MS10256',
        fechaCompra:'17-09-2022',
        proveedor:'MPS Mayorista',
        valorActivo:550000,
        precioRenta:85000,
        prestador:'RMA Computadores'
    }
}
