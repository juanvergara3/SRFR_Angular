import { Component, OnInit, inject, WritableSignal, signal, computed, Signal } from '@angular/core';
import { Location } from '@angular/common';

import { Activo } from 'src/app/interfaces/activo';
import { ActivoService } from 'src/app/services/activo.service';

import { Tipo } from 'src/app/interfaces/tipo';
import { TipoService } from 'src/app/services/tipo.service';

import { Marca } from 'src/app/interfaces/marca';
import { MarcaService } from 'src/app/services/marca.service';

import { Estado } from 'src/app/interfaces/estado';
import { EstadoService } from 'src/app/services/estado.service';

import { Proveedor } from 'src/app/interfaces/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

import { Prestador } from 'src/app/interfaces/prestador';
import { PrestadorService } from 'src/app/services/prestador.service';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'detalles-activo',
  templateUrl: './detalles-activo.component.html',
  styleUrls: ['./detalles-activo.component.css']
})
export class DetallesActivoComponent implements OnInit {

  private activoService = inject(ActivoService);
  private marcaService =  inject(MarcaService);
  private tipoService = inject(TipoService);
  private estadoService = inject(EstadoService);
  private proveedorService = inject(ProveedorService);
  private prestadorService = inject(PrestadorService);

  public windowTitleService = inject(WindowTitleService);
  private location = inject(Location);


  marcaSignal: WritableSignal<Marca> = signal({}) as WritableSignal<Marca>;
  tipoSignal: WritableSignal<Tipo> = signal({}) as WritableSignal<Tipo>;
  estadoSignal: WritableSignal<Estado> = signal({}) as WritableSignal<Estado>;
  proveedorSignal: WritableSignal<Proveedor> = signal({}) as WritableSignal<Proveedor>;
  prestadorSignal: WritableSignal<Prestador> = signal({}) as WritableSignal<Prestador>;

  contrastColorComputed: Signal<string> = computed(() => 
    this.calculteContrast(this.estadoSignal().color)
  );

  activoItem!: Activo;

  windowTitle = `Detalles activo`;
  
  getMarca(): void {
    this.marcaService.getMarcaById(this.activoItem.id_marca).subscribe(marcaReturned =>
      this.marcaSignal.set(marcaReturned)
    );
  }

  getTipo(): void {
    this.tipoService.getTipoById(this.activoItem.id_tipo).subscribe(tipoReturned =>
      this.tipoSignal.set(tipoReturned)
    );
  }

  getEstado(): void {
    this.estadoService.getEstadoById(this.activoItem.id_estado).subscribe(estadoReturned =>
      this.estadoSignal.set(estadoReturned)
    );
  }

  getProveedor(): void {
    this.proveedorService.getProveedorById(this.activoItem.id_proveedor).subscribe(proveedorReturned =>
      this.proveedorSignal.set(proveedorReturned)
    );
  }

  getPrestador(): void {
    this.prestadorService.getPrestadorById(this.activoItem.id_prestador).subscribe(prestadorReturned =>
      this.prestadorSignal.set(prestadorReturned)
    );
  }

  goBack(){
    this.location.back()
  }

  calculteContrast(color: string): string{

    if(color){
      let red = parseInt(color.slice(1, 3), 16);
      let green = parseInt(color.slice(3, 5), 16);
      let blue = parseInt(color.slice(5, 7), 16);

      let arr: number[] = [red, green, blue]

      let L: number;

      for(let i = 0, c; i < arr.length; i++){

        c = arr[i];
        c = c / 255.0;

        if (c <= 0.04045) {
          c = c/12.92;
        } else {
          c = ((c+0.055)/1.055) ** 2.4;
        }

        arr[i] = c;
      }

      L = (0.2126 * arr[0]) + (0.7152 * arr[1]) + (0.0722 * arr[2]);

      if( L > 0.179) {
        return '#000000'
      } else {
        return '#ffffff'
      }
    }

    return '';
  }

  ngOnInit(): void {
    this.activoItem = history.state as Activo;

    this.getTipo();
    this.getMarca();
    this.getEstado();
    this.getProveedor();
    this.getPrestador();

    this.windowTitleService.setWindowTitle(this.windowTitle);
  }
}
