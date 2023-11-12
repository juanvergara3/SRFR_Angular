import { Component, Input, OnInit, inject, WritableSignal, signal, computed, Signal } from '@angular/core';

import { Activo } from 'src/app/interfaces/activo';
import { ActivoService } from 'src/app/services/activo.service';

import { Tipo } from 'src/app/interfaces/tipo';
import { TipoService } from 'src/app/services/tipo.service';

import { Marca } from 'src/app/interfaces/marca';
import { MarcaService } from 'src/app/services/marca.service';

import { Estado } from 'src/app/interfaces/estado';
import { EstadoService } from 'src/app/services/estado.service';

import { Periodo } from 'src/app/interfaces/periodo';
import { PeriodoService } from 'src/app/services/periodo.service';

@Component({
  selector: 'pendiente',
  templateUrl: './pendiente.component.html',
  styleUrls: ['./pendiente.component.css']
})
export class PendienteComponent {

  private activoService = inject(ActivoService);
  private marcaService =  inject(MarcaService);
  private tipoService = inject(TipoService);
  private estadoService = inject(EstadoService);
  private periodoService = inject(PeriodoService);

  marcaSignal: WritableSignal<Marca> = signal({}) as WritableSignal<Marca>;
  tipoSignal: WritableSignal<Tipo> = signal({}) as WritableSignal<Tipo>;
  estadoSignal: WritableSignal<Estado> = signal({}) as WritableSignal<Estado>;
  periodoSignal: WritableSignal<Periodo> = signal({}) as WritableSignal<Periodo>;

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

  getLastPeriodo(): void {
    this.periodoService.getLastPeriodoByActivo(this.activoItem.id_activo).subscribe(periodoReturned =>
      this.periodoSignal.set(periodoReturned)
    );
   }

  incrementDate(date:string) { //buscar una forma más eficiente de hacer esto

    if(date != undefined){
      let month: number = +(date.substring(5, 7));

      month++;

      if(month < 10){
        return date.substring(0, 5) + '0' + month + date.substring(7);
      } else {
        return date.substring(0, 5) + month + date.substring(7);
      }
    }

    return '';
  }

  ngOnInit(): void {
    this.getMarca();
    this.getTipo();
    this.getEstado();
    this.getLastPeriodo();
  }
}
