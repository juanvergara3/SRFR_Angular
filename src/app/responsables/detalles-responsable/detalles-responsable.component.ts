import { Component, OnInit, inject, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Responsable } from 'src/app/interfaces/responsable';

import { Entrega } from 'src/app/interfaces/entrega';
import { EntregaService } from 'src/app/services/entrega.service';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'detalles-responsable',
  templateUrl: './detalles-responsable.component.html',
  styleUrls: ['./detalles-responsable.component.css']
})
export class DetallesResponsableComponent implements OnInit {

  private entregaService = inject(EntregaService);

  public windowTitleService = inject(WindowTitleService);
  public activatedRoute = inject(ActivatedRoute);

  entregasArray: WritableSignal<Entrega[]> = signal([]);

  responsableItem!: Responsable;

  windowTitle = `Detalles responsable`;

  getEntregas(): void {
    this.entregaService.getEntregasByResposable(this.responsableItem.id_responsable).subscribe(entregasReturned => this.entregasArray.set(entregasReturned));
  }

  ngOnInit(): void {
    this.responsableItem = history.state as Responsable;

    this.getEntregas();

    this.windowTitleService.setWindowTitle(this.windowTitle);
  }
}
