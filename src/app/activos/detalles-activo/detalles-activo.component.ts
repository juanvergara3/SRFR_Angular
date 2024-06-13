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

import { Grupo } from 'src/app/interfaces/grupo';
import { GrupoService } from 'src/app/services/grupo.service';

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
  private grupoService = inject(GrupoService);
  private periodoService = inject(PeriodoService);
  private entregaService = inject(EntregaService);

  public windowTitleService = inject(WindowTitleService);
  private location = inject(Location);

  editing: boolean = false; 

  numeroSerie!: string;
  modelo!: string;
  facturaCompra!: string;
  fechaCompra!: string;
  valor!: number;
  precioRenta!: number;
  idMarca!: number;
  idProveedor!: number;
  idPrestador!: number;
  idTipo!: number;
  idEstado!: number;
  idGrupo?: number;

  activoItem!: Activo;

  marcaSignal: WritableSignal<Marca> = signal({}) as WritableSignal<Marca>;
  tipoSignal: WritableSignal<Tipo> = signal({}) as WritableSignal<Tipo>;
  estadoSignal: WritableSignal<Estado> = signal({}) as WritableSignal<Estado>;
  proveedorSignal: WritableSignal<Proveedor> = signal({}) as WritableSignal<Proveedor>;
  prestadorSignal: WritableSignal<Prestador> = signal({}) as WritableSignal<Prestador>;
  grupoSignal: WritableSignal<Grupo> = signal({}) as WritableSignal<Grupo>;

  gruposArray: WritableSignal<Grupo[]> = signal([]);
  tiposArray: WritableSignal<Tipo[]> = signal([]);
  marcasArray: WritableSignal<Marca[]> = signal([]);
  estadosArray: WritableSignal<Estado[]> = signal([]);
  proveedoresArray: WritableSignal<Proveedor[]> = signal([]);
  prestadoresArray: WritableSignal<Prestador[]> = signal([]);

  periodosArray: WritableSignal<Periodo[]> = signal([]);
  entregasArray: WritableSignal<Entrega[]> = signal([]);

  contrastColorComputed: Signal<string> = computed(() => 
    this.activoService.calculteContrast(this.estadoSignal().color)
  );

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

  getGrupo(): void {
    this.grupoService.getGrupoById(this.activoItem.id_grupo).subscribe(grupoReturned =>
      this.grupoSignal.set(grupoReturned)
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

  getGrupos(): void {
    this.grupoService.getGrupos().subscribe(gruposReturned => this.gruposArray.set(gruposReturned));
  }

  getTipos(): void {
    this.tipoService.getTipos().subscribe(tiposReturned => this.tiposArray.set(tiposReturned));
  }

  getMarcas(): void {
    this.marcaService.getMarcas().subscribe(marcasReturned => this.marcasArray.set(marcasReturned));
  }
  
  getEstados(): void {
    this.estadoService.getEstados().subscribe(estadosReturned => this.estadosArray.set(estadosReturned));
  }

  getProveedores(): void {
    this.proveedorService.getProveedores().subscribe(proveedoresReturned => this.proveedoresArray.set(proveedoresReturned));
  }

  getPrestadores(): void {
    this.prestadorService.getPrestadores().subscribe(prestadoresReturned => this.prestadoresArray.set(prestadoresReturned));
  }
  
  ngOnInit(): void {
    this.activoItem = history.state as Activo;

    this.getTipo();
    this.getMarca();
    this.getEstado();
    this.getProveedor();
    this.getPrestador();
    this.getGrupo();

    this.initValues();

    this.getPeriodos();
    this.getEntregas();

    this.windowTitleService.setWindowTitle(this.windowTitle);

    this.getTipos();
    this.getMarcas();
    this.getEstados();
    this.getProveedores();
    this.getPrestadores();
    this.getGrupos();
  }

  submitEditActivo() {
    this.activoService.editActivo(this.activoItem.id_activo, this.numeroSerie, this.modelo, this.facturaCompra, this.fechaCompra, this.valor, this.precioRenta, 
      this.marcaSignal().id_marca, this.proveedorSignal().id_proveedor, this.prestadorSignal().id_prestador, this.tipoSignal().id_tipo, this.estadoSignal().id_estado, this.grupoSignal().id_grupo);

    // this.activoService.editActivo(this.activoItem.id_activo, this.numeroSerie, this.modelo, this.facturaCompra, this.fechaCompra, this.valor, this.precioRenta, 
    //   this.idMarca, this.idProveedor, this.idPrestador, this.idTipo, this.idEstado, this.idGrupo);

    // this.activoItem.id_cliente = this.idCliente;
    // this.ubicacionItem.nombre = this.nombre;
    // this.ubicacionItem.direccion = this.direccion;
    // this.ubicacionItem.telefono = this.telefono;
    
    this.editing = false;

    // RELOAD PAGE OR CALL GETTERS AGAIN
  }

  resetValues() {
    this.initValues();

    this.editing = false;
  }

  initValues() {

    this.numeroSerie = this.activoItem.numero_serie;
    this.modelo = this.activoItem.modelo;
    this.facturaCompra = this.activoItem.factura_compra;
    this.fechaCompra = this.activoItem.fecha_compra;
    this.valor = this.activoItem.valor;
    this.precioRenta = this.activoItem.precio_renta;

    // this.idMarca
    // this.idProveedor
    // this.idPrestador
    //this.idTipo = this.tipoSignal().id_tipo;
    // this.idEstado
    // this.idGrupo
  }
}
