import { Component, Input, OnInit, inject, WritableSignal, signal, computed, Signal } from '@angular/core';

import { Activo } from 'src/app/interfaces/activo';
import { ActivoService } from 'src/app/services/activo.service';

import { Tipo } from 'src/app/interfaces/tipo';
import { TipoService } from 'src/app/services/tipo.service';

import { Marca } from 'src/app/interfaces/marca';
import { MarcaService } from 'src/app/services/marca.service';

import { Estado } from 'src/app/interfaces/estado';
import { EstadoService } from 'src/app/services/estado.service';

@Component({
  selector: 'activo',
  templateUrl: './activo.component.html',
  styleUrls: ['./activo.component.css']
})
export class ActivoComponent implements OnInit {

  private activoService = inject(ActivoService);
  private marcaService =  inject(MarcaService);
  private tipoService = inject(TipoService);
  private estadoService = inject(EstadoService);

  marcaSignal: WritableSignal<Marca> = signal({}) as WritableSignal<Marca>;
  tipoSignal: WritableSignal<Tipo> = signal({}) as WritableSignal<Tipo>;
  estadoSignal: WritableSignal<Estado> = signal({}) as WritableSignal<Estado>;

  contrastColorComputed: Signal<string> = computed(() => 
    this.activoService.calculteContrast(this.estadoSignal().color)
  );

  @Input()
  activoItem!: Activo;

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

  ngOnInit(): void {
    this.getMarca();
    this.getTipo();
    this.getEstado();
  }
}
