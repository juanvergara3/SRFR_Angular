import { NgModule } from '@angular/core';
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
  { path: '', redirectTo: '/pendientes', pathMatch: 'full' },
  { path:'facturas', component:VistaFacturasComponent },
  { path:'factura/:id', component:DetallesFacturaComponent },
  { path:'clientes', component:VistaClientesComponent },
  { path:'cliente/:id', component:DetallesClienteComponent },
  { path:'activos', component:VistaActivosComponent },
  { path:'activo/:id', component:DetallesActivoComponent },
  { path:'responsables', component:VistaResponsablesComponent },
  { path:'responsable/:id', component:DetallesResponsableComponent },
  { path:'ubicaciones', component:VistaUbicacionesComponent },
  { path:'ubicacion/:id', component:DetallesUbicacionComponent },
  { path:'pendientes', component:PendientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
