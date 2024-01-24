import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BrandingContainerComponent } from './main-menu/branding-container/branding-container.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchBarComponent } from './top-bar/search-bar/search-bar.component';
import { VistaFacturasComponent } from './facturas/vista-facturas/vista-facturas.component';
import { VistaClientesComponent } from './clientes/vista-clientes/vista-clientes.component';
import { VistaActivosComponent } from './activos/vista-activos/vista-activos.component';
import { GrupoActivosComponent } from './activos/vista-activos/grupo-activos/grupo-activos.component';
import { ActivoComponent } from './activos/vista-activos/grupo-activos/activo/activo.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { DetallesActivoComponent } from './activos/detalles-activo/detalles-activo.component';
import { DetallesClienteComponent } from './clientes/detalles-cliente/detalles-cliente.component';
import { DetallesFacturaComponent } from './facturas/detalles-factura/detalles-factura.component';
import { VistaResponsablesComponent } from './responsables/vista-responsables/vista-responsables.component';
import { VistaUbicacionesComponent } from './ubicaciones/vista-ubicaciones/vista-ubicaciones.component';
import { DetallesUbicacionComponent } from './ubicaciones/detalles-ubicacion/detalles-ubicacion.component';
import { DetallesResponsableComponent } from './responsables/detalles-responsable/detalles-responsable.component';
import { MessagesComponent } from './messages/messages.component';
import { ModalesVistaFacturasComponent } from './facturas/vista-facturas/modales-vista-facturas/modales-vista-facturas.component';
import { FacturaComponent } from './facturas/vista-facturas/factura/factura.component';
import { GrupoUbicacionesComponent } from './ubicaciones/vista-ubicaciones/grupo-ubicaciones/grupo-ubicaciones.component';
import { UbicacionComponent } from './ubicaciones/vista-ubicaciones/grupo-ubicaciones/ubicacion/ubicacion.component';
import { ClienteComponent } from './clientes/vista-clientes/cliente/cliente.component';
import { ResponsableComponent } from './responsables/vista-responsables/responsable/responsable.component';
import { UbicacionDetallesClienteComponent } from './clientes/detalles-cliente/ubicacion-detalles-cliente/ubicacion-detalles-cliente.component';
import { EntregaDetallesActivoComponent } from './activos/detalles-activo/entrega-detalles-activo/entrega-detalles-activo.component';
import { PeriodoDetallesActivoComponent } from './activos/detalles-activo/periodo-detalles-activo/periodo-detalles-activo.component';
import { PendienteComponent } from './pendientes/pendiente/pendiente.component';
import { EntregaDetallesUbicacionComponent } from './ubicaciones/detalles-ubicacion/entrega-detalles-ubicacion/entrega-detalles-ubicacion.component';
import { ActivoEntregaComponent } from './activos/activo-entrega/activo-entrega.component';
import { EntregaDetallesResponsableComponent } from './responsables/detalles-responsable/entrega-detalles-responsable/entrega-detalles-responsable.component';
import { EntregaDetallesClienteComponent } from './clientes/detalles-cliente/entrega-detalles-cliente/entrega-detalles-cliente.component';
import { PeriodoDetallesFacturaComponent } from './facturas/detalles-factura/periodo-detalles-factura/periodo-detalles-factura.component';
import { ModalesDetallesActivoComponent } from './activos/detalles-activo/modales-detalles-activo/modales-detalles-activo/modales-detalles-activo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    BrandingContainerComponent,
    TopBarComponent,
    SearchBarComponent,
    VistaFacturasComponent,
    VistaClientesComponent,
    VistaActivosComponent,
    GrupoActivosComponent,
    ActivoComponent,
    PendientesComponent,
    DetallesActivoComponent,
    DetallesClienteComponent,
    DetallesFacturaComponent,
    VistaResponsablesComponent,
    VistaUbicacionesComponent,
    DetallesUbicacionComponent,
    DetallesResponsableComponent,
    MessagesComponent,
    ModalesVistaFacturasComponent,
    FacturaComponent,
    GrupoUbicacionesComponent,
    UbicacionComponent,
    ClienteComponent,
    ResponsableComponent,
    UbicacionDetallesClienteComponent,
    EntregaDetallesActivoComponent,
    PeriodoDetallesActivoComponent,
    PendienteComponent,
    EntregaDetallesUbicacionComponent,
    ActivoEntregaComponent,
    EntregaDetallesResponsableComponent,
    EntregaDetallesClienteComponent,
    PeriodoDetallesFacturaComponent,
    ModalesDetallesActivoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
