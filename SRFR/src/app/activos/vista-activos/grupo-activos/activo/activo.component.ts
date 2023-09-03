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
  estado = {estado:'', color:'', contrast:''};

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
    this.activoService.getEstado(id).subscribe(estadoReturned => this.estado = {estado: estadoReturned.estado, color: estadoReturned.color, contrast:this.calculteContrast(estadoReturned.color)});
  }

  calculteContrast(color: string): string{

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

  ngOnInit(): void{
    this.getTipo(this.activoItem.id_tipo);
    this.getMarca(this.activoItem.id_marca);
    this.getEstado(this.activoItem.id_estado);
  }

}
