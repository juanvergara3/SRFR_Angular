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

import { Periodo } from 'src/app/interfaces/periodo';
import { PeriodoService } from 'src/app/services/periodo.service';

import { Entrega } from 'src/app/interfaces/entrega';
import { EntregaService } from 'src/app/services/entrega.service';

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
  private periodoService = inject(PeriodoService);
  private entregaService = inject(EntregaService);

  public windowTitleService = inject(WindowTitleService);
  private location = inject(Location);

  marcaSignal: WritableSignal<Marca> = signal({}) as WritableSignal<Marca>;
  tipoSignal: WritableSignal<Tipo> = signal({}) as WritableSignal<Tipo>;
  estadoSignal: WritableSignal<Estado> = signal({}) as WritableSignal<Estado>;
  proveedorSignal: WritableSignal<Proveedor> = signal({}) as WritableSignal<Proveedor>;
  prestadorSignal: WritableSignal<Prestador> = signal({}) as WritableSignal<Prestador>;

  periodosArray: WritableSignal<Periodo[]> = signal([]);
  entregasArray: WritableSignal<Entrega[]> = signal([]);

  contrastColorComputed: Signal<string> = computed(() => 
    this.activoService.calculteContrast(this.estadoSignal().color)
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

  getPeriodos(): void {
    this.periodoService.getPeriodosByActivo(this.activoItem.id_activo).subscribe(periodosReturned => this.periodosArray.set(periodosReturned));
  }

  getEntregas(): void {
    this.entregaService.getEntregasByActivo(this.activoItem.id_activo).subscribe(entregasReturned => this.entregasArray.set(entregasReturned));
  }

  goBack(){
    this.location.back()
  }
  
  ngOnInit(): void {
    this.activoItem = history.state as Activo;

    this.getTipo();
    this.getMarca();
    this.getEstado();
    this.getProveedor();
    this.getPrestador();

    this.getPeriodos();
    this.getEntregas();

    this.windowTitleService.setWindowTitle(this.windowTitle);
  }
}
