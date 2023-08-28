import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BrandingContainerComponent } from './main-menu/branding-container/branding-container.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchBarComponent } from './top-bar/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { VistaFacturasComponent } from './facturas/vista-facturas/vista-facturas.component';
import { VistaClientesComponent } from './clientes/vista-clientes/vista-clientes.component';
import { VistaActivosComponent } from './activos/vista-activos/vista-activos.component';
import { GrupoActivosComponent } from './activos/vista-activos/grupo-activos/grupo-activos.component';
import { ActivoComponent } from './activos/vista-activos/grupo-activos/activo/activo.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { DetallesActivoComponent } from './activos/detalles-activo/detalles-activo.component';
import { DetallesClienteComponent } from './clientes/detalles-cliente/detalles-cliente.component';

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
    DetallesClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
