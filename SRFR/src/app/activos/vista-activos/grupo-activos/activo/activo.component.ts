import { Component, Input, OnInit } from '@angular/core';

import { Activo } from 'src/app/interfaces/activo';
import { ActivoService } from 'src/app/services/activo.service';

import { Tipo } from 'src/app/interfaces/tipo';
import { Marca } from 'src/app/interfaces/marca';
import { Estado } from 'src/app/interfaces/estado';

@Component({
  selector: 'activo',
  templateUrl: './activo.component.html',
  styleUrls: ['./activo.component.css']
})
export class ActivoComponent implements OnInit {

  marca = '';
  tipo = '';
  estado = {estado:'', color:''};

  @Input()
  activoItem!: Activo;

  constructor(private activoService: ActivoService) { }

  getTipo(id: number): void{
    this.activoService.getTipo(id).subscribe(tipoReturned => this.tipo = tipoReturned.formfactor);
  }

  getMarca(id: number): void{
    this.activoService.getMarca(id).subscribe(marcaReturned => this.marca = marcaReturned.nombre);
  }

  getEstado(id: number): void{
    this.activoService.getEstado(id).subscribe(estadoReturned => this.estado = {estado: estadoReturned.estado, color: estadoReturned.color});
  }

  ngOnInit(): void{
    this.getTipo(this.activoItem.id_tipo);
    this.getMarca(this.activoItem.id_marca);
    this.getEstado(this.activoItem.id_estado);
  }

}
