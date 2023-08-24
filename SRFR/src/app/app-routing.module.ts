import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VistaFacturasComponent } from './facturas/vista-facturas/vista-facturas.component';
import { VistaClientesComponent } from './clientes/vista-clientes/vista-clientes.component';
import { VistaActivosComponent } from './activos/vista-activos/vista-activos.component';
import { PendientesComponent } from './pendientes/pendientes.component';

const routes: Routes = [
  { path:'vista-facturas', component:VistaFacturasComponent },
  { path:'vista-clientes', component:VistaClientesComponent },
  { path:'vista-activos', component:VistaActivosComponent },
  { path:'pendientes-facturacion', component:PendientesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
