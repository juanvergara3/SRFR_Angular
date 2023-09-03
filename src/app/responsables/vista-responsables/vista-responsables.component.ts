import { Component } from '@angular/core';

import { Responsable } from 'src/app/interfaces/responsable';
import { ResponsableService } from 'src/app/services/responsable.service';

@Component({
  selector: 'vista-responsables',
  templateUrl: './vista-responsables.component.html',
  styleUrls: ['./vista-responsables.component.css']
})
export class VistaResponsablesComponent {

  responsablesArray: Responsable[] = [];

  constructor(private responsableService: ResponsableService) { }

  getResponsables(): void {
      this.responsableService.getResponsables().subscribe(responsablesReturned => this.responsablesArray = responsablesReturned);
  }

  ngOnInit(): void {
      this.getResponsables();
  }

}
