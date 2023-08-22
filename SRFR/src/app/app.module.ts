import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BrandingContainerComponent } from './main-menu/branding-container/branding-container.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ItemContainerComponent } from './item-container/item-container.component';
import { SearchBarComponent } from './top-bar/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { VistaFacturasComponent } from './facturas/vista-facturas/vista-facturas.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    BrandingContainerComponent,
    TopBarComponent,
    ItemContainerComponent,
    SearchBarComponent,
    VistaFacturasComponent
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
