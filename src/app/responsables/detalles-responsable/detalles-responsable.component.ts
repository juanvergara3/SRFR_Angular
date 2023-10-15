import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Responsable } from 'src/app/interfaces/responsable';

import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'detalles-responsable',
  templateUrl: './detalles-responsable.component.html',
  styleUrls: ['./detalles-responsable.component.css']
})
export class DetallesResponsableComponent implements OnInit {

  public windowTitleService = inject(WindowTitleService);
  public activatedRoute = inject(ActivatedRoute);

  windowTitle = `Detalles responsable`;

  responsableItem!: Responsable;

  ngOnInit(): void {
    this.windowTitleService.setWindowTitle(this.windowTitle);

    this.responsableItem = history.state as Responsable;
  }
}
