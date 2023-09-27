import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Activo } from 'src/app/interfaces/activo';
import { ActivoService } from 'src/app/services/activo.service';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'detalles-activo',
  templateUrl: './detalles-activo.component.html',
  styleUrls: ['./detalles-activo.component.css']
})
export class DetallesActivoComponent implements OnInit {

  windowTitle = `Detalles activo`;

  activo!: Activo;
  marca = '';
  tipo = '';
  estado = {estado:'', color:'', contrast:''};
  proveedor = '';
  prestador = '';

  constructor( private route: ActivatedRoute, private activoService : ActivoService, private location: Location, public windowTitleService: WindowTitleService ) { }

  getActivo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.activoService.getActivo(id).subscribe(activoReturned => this.activo = activoReturned);
  }
  
  getTipo(id: number): void{
    this.activoService.getTipo(id).subscribe(tipoReturned => this.tipo = tipoReturned.formfactor);
  }

  getMarca(id: number): void{
    this.activoService.getMarca(id).subscribe(marcaReturned => this.marca = marcaReturned.nombre);
  }

  getEstado(id: number): void{
    this.activoService.getEstado(id).subscribe(estadoReturned => this.estado = {estado: estadoReturned.estado, color: estadoReturned.color, contrast:this.calculteContrast(estadoReturned.color)});
  }

  getProveedor(id: number): void{
    this.activoService.getProveedor(id).subscribe(proveedorReturned => this.proveedor = proveedorReturned.nombre);
  }

  getPrestador(id: number): void{
    this.activoService.getPrestador(id).subscribe(prestadorReturned => this.prestador = prestadorReturned.nombre);
  }

  goBack(){
    this.location.back()
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

  ngOnInit(): void {
    this.getActivo();
    this.getTipo(this.activo.id_tipo);
    this.getMarca(this.activo.id_marca);
    this.getEstado(this.activo.id_estado);
    this.getProveedor(this.activo.id_proveedor);
    this.getPrestador(this.activo.id_prestador);

    this.windowTitleService.setWindowTitle(this.windowTitle);
  }
}
