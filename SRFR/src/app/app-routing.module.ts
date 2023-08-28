import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VistaFacturasComponent } from './facturas/vista-facturas/vista-facturas.component';

import { VistaClientesComponent } from './clientes/vista-clientes/vista-clientes.component';
import { DetallesClienteComponent } from './clientes/detalles-cliente/detalles-cliente.component';

import { VistaActivosComponent } from './activos//vista-activos/vista-activos.component';
import { DetallesActivoComponent } from './activos/detalles-activo/detalles-activo.component';

import { PendientesComponent } from './pendientes/pendientes.component';

const routes: Routes = [
  { path:'vista-facturas', component:VistaFacturasComponent },
  { path:'vista-clientes', component:VistaClientesComponent },
  { path:'detalles-cliente', component:DetallesClienteComponent},
  { path:'vista-activos', component:VistaActivosComponent },
  { path:'detalles-activo', component:DetallesActivoComponent},
  { path:'pendientes-facturacion', component:PendientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
