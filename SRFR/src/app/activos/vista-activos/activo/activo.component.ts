import { Component, Input } from '@angular/core';

@Component({
  selector: 'activo',
  templateUrl: './activo.component.html',
  styleUrls: ['./activo.component.css']
})
export class ActivoComponent {
  @Input()
  activoItem:{sn:string, 
    tipo:string, 
    marca:string, 
    modelo:string, 
    estado:string, 
    colorEstado:string, 
    grupo:number} = {sn: '',
    tipo: '',
    marca: '',
    modelo: '',
    estado: '',
    colorEstado: '',
    grupo: 0};
}
