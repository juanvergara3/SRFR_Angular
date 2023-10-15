import { Component, Input, inject } from '@angular/core';

import { Responsable } from 'src/app/interfaces/responsable';
import { ResponsableService } from 'src/app/services/responsable.service';

@Component({
  selector: 'responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css']
})
export class ResponsableComponent {

  private responsableService = inject(ResponsableService);

  @Input()
  responsableItem!: Responsable;

}
