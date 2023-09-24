import { Component, Signal, computed, signal, WritableSignal } from '@angular/core';

import { Responsable } from 'src/app/interfaces/responsable';
import { ResponsableService } from 'src/app/services/responsable.service';

import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'vista-responsables',
  templateUrl: './vista-responsables.component.html',
  styleUrls: ['./vista-responsables.component.css']
})
export class VistaResponsablesComponent {
  responsablesArray: WritableSignal<Responsable[]> = signal([]);

  filterText: Signal<string> = computed( 
    () => this.searchBarService.searchTextSignal().toLocaleLowerCase()
    );

  filteredResponsablesArray: Signal<Responsable[]> = computed(() => 
    this.responsablesArray().filter(responsable => { 
          let text = this.filterText();
          return responsable?.nombre.toLowerCase().includes(text) || 
          responsable?.cedula.toString().includes(text) ||
          responsable?.telefono.includes(text) ||
          responsable?.correo.toLocaleLowerCase().includes(text);
        } 
      )
    );

  constructor(private responsableService: ResponsableService, public searchBarService: SearchBarService) { }

  getResponsables(): void {
      this.responsableService.getResponsables().subscribe(responsablesReturned => this.responsablesArray.set(responsablesReturned));
  }

  ngOnInit(): void {
      this.getResponsables();
  }

}
