import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VistaFacturasComponent } from './facturas/vista-facturas/vista-facturas.component';
import { DetallesFacturaComponent } from './facturas/detalles-factura/detalles-factura.component';

import { VistaClientesComponent } from './clientes/vista-clientes/vista-clientes.component';
import { DetallesClienteComponent } from './clientes/detalles-cliente/detalles-cliente.component';

import { VistaActivosComponent } from './activos//vista-activos/vista-activos.component';
import { DetallesActivoComponent } from './activos/detalles-activo/detalles-activo.component';

import { VistaResponsablesComponent } from './responsables/vista-responsables/vista-responsables.component';
import { DetallesResponsableComponent } from './responsables/detalles-responsable/detalles-responsable.component';

import { VistaUbicacionesComponent } from './ubicaciones/vista-ubicaciones/vista-ubicaciones.component';
import { DetallesUbicacionComponent } from './ubicaciones/detalles-ubicacion/detalles-ubicacion.component';

import { PendientesComponent } from './pendientes/pendientes.component';

const routes: Routes = [
  { path: '', redirectTo: '/pendientes-facturacion', pathMatch: 'full' },
  { path:'vista-facturas', component:VistaFacturasComponent },
  { path:'detalles-factura', component:DetallesFacturaComponent },
  { path:'vista-clientes', component:VistaClientesComponent },
  { path:'detalles-cliente', component:DetallesClienteComponent },
  { path:'vista-activos', component:VistaActivosComponent },
  { path:'detalles-activo', component:DetallesActivoComponent },
  { path:'vista-responsables', component:VistaResponsablesComponent },
  { path:'detalles-responsable', component:DetallesResponsableComponent },
  { path:'vista-ubicaciones', component:VistaUbicacionesComponent },
  { path:'detalles-ubicacion', component:DetallesUbicacionComponent },
  { path:'pendientes-facturacion', component:PendientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
