import { Component, OnInit, inject } from '@angular/core';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'detalles-responsable',
  templateUrl: './detalles-responsable.component.html',
  styleUrls: ['./detalles-responsable.component.css']
})
export class DetallesResponsableComponent implements OnInit {

  public windowTitleService = inject(WindowTitleService);

  windowTitle = `Detalles responsable`;

  item = {
    nombre:'Catalina Bedolla',
    cedula:'2000859324',
    telefono:'3606051867',
    correo:'cata.bedolla@domain.com.co'
  }

  ngOnInit(): void {
    this.windowTitleService.setWindowTitle(this.windowTitle);
  }
}
