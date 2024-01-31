import { Component, Input, OnInit, inject, WritableSignal, signal, computed, Signal, Output, EventEmitter, effect } from '@angular/core';

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

import { Entrega } from 'src/app/interfaces/entrega';
import { EntregaService } from 'src/app/services/entrega.service';

import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

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
  private clienteService = inject(ClienteService);
  private entregaService = inject(EntregaService);

  marcaSignal: WritableSignal<Marca> = signal({}) as WritableSignal<Marca>;
  tipoSignal: WritableSignal<Tipo> = signal({}) as WritableSignal<Tipo>;
  estadoSignal: WritableSignal<Estado> = signal({}) as WritableSignal<Estado>;
  periodoSignal: WritableSignal<Periodo> = signal({}) as WritableSignal<Periodo>;
  entregaSignal: WritableSignal<Entrega> = signal({}) as WritableSignal<Entrega>;
  clienteSignal: WritableSignal<Cliente> = signal({}) as WritableSignal<Cliente>;

  entregaClienteEffect = effect(() => { // Se actualiza siempre que entregaSignal cambia.
    if(this.entregaSignal().id_ubicacion != undefined)
      this.getCliente();
    }
  );

  contrastColorComputed: Signal<string> = computed(() => 
    this.activoService.calculteContrast(this.estadoSignal().color)
  );

  @Input()
  activoItem!: Activo;

  @Output()
  isCheckedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  isChecked: boolean = false;

  emitCheckedEvent(): void {
    this.isCheckedEvent.emit(this.isChecked);
  }

  toggleCheck(): void {
    this.isChecked = !this.isChecked;
    this.emitCheckedEvent();
  }

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

   getLastEntrega(): void {
    this.entregaService.getLastEntregaByActivo(this.activoItem.id_activo).subscribe(entregaReturned =>
      this.entregaSignal.set(entregaReturned)
    );
   }

   getCliente(): void {
    this.clienteService.getClienteByUbicacion(this.entregaSignal().id_ubicacion).subscribe(clienteReturned =>
        this.clienteSignal.set(clienteReturned)
      );
   }

   incrementDate(dateString:string): string {
    if(dateString != undefined) {
      let date = new Date(dateString);

      date.setMonth(date.getMonth() + 1);
      date.setDate(date.getDate() - 1);

      return date.toISOString().substring(0, 10);
    }
    return '';
  }

  ngOnInit(): void {
    this.getMarca();
    this.getTipo();
    this.getEstado();
    this.getLastPeriodo();
    this.getLastEntrega();
  }
}
