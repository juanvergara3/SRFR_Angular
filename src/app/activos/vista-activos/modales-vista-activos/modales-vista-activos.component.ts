import { Component, inject, signal, WritableSignal } from '@angular/core';

import { ActivoService } from 'src/app/services/activo.service';

import { Grupo } from 'src/app/interfaces/grupo';
import { GrupoService } from 'src/app/services/grupo.service';

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

@Component({
  selector: 'modales-vista-activos',
  templateUrl: './modales-vista-activos.component.html',
  styleUrls: ['./modales-vista-activos.component.css']
})
export class ModalesVistaActivosComponent {

  private activoService = inject(ActivoService);

  private grupoService = inject(GrupoService);
  private tipoService = inject(TipoService);
  private marcaService = inject(MarcaService);
  private estadoService = inject(EstadoService);
  private proveedorService = inject(ProveedorService);
  private prestadorService = inject(PrestadorService);

  gruposArray: WritableSignal<Grupo[]> = signal([]);
  tiposArray: WritableSignal<Tipo[]> = signal([]);
  marcasArray: WritableSignal<Marca[]> = signal([]);
  estadosArray: WritableSignal<Estado[]> = signal([]);
  proveedoresArray: WritableSignal<Proveedor[]> = signal([]);
  prestadoresArray: WritableSignal<Prestador[]> = signal([]);

  nombre: string = ''; 

  numeroSerie: string = '';
  modelo: string = '';
  facturaCompra: string = '';
  fechaCompra: string = '';
  valor!: number;
  precioRenta!: number;
  idMarca: number = 0;
  idProveedor: number = 0;
  idPrestador: number = 0;
  idTipo: number = 0;
  idEstado: number = 0;
  idGrupo: number = 0;

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

  submitNewGrupo() {
    this.grupoService.newGrupo(this.nombre);

    this.clearSelections();
  }

  submitNewActivo() {
    this.activoService.newActivo(this.numeroSerie, this.modelo, this.facturaCompra, this.fechaCompra, this.valor, this.precioRenta, this.idMarca, this.idProveedor, this.idPrestador, this.idTipo, this.idEstado, this.idGrupo);

    this.clearSelections();
  }

  calculateContrast(color: string) {
    return this.activoService.calculteContrast(color);
  }

  clearSelections() {
    this.nombre = '';
    this.numeroSerie = '';
    this.modelo = '';
    this.facturaCompra = '';
    this.fechaCompra = '';
    this.valor = undefined as any;
    this.precioRenta = undefined as any;
    this.idMarca = 0;
    this.idProveedor = 0;
    this.idPrestador = 0;
    this.idTipo = 0;
    this.idEstado = 0;
    this.idGrupo = 0;
  }

  ngOnInit(): void {
    this.getGrupos();
    this.getTipos();
    this.getMarcas();
    this.getEstados();
    this.getProveedores();
    this.getPrestadores();
  }
}
