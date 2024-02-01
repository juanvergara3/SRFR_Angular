import { Component, Signal, computed, signal, WritableSignal, inject, effect, untracked } from '@angular/core';

import { Responsable } from 'src/app/interfaces/responsable';
import { ResponsableService } from 'src/app/services/responsable.service';

import { SearchBarService } from 'src/app/services/search-bar.service';
import { WindowTitleService } from 'src/app/services/window-title.service';

@Component({
  selector: 'vista-responsables',
  templateUrl: './vista-responsables.component.html',
  styleUrls: ['./vista-responsables.component.css']
})
export class VistaResponsablesComponent {

  private responsableService = inject(ResponsableService);
  public windowTitleService = inject(WindowTitleService);
  public searchBarService = inject(SearchBarService);

  responsablesArray: WritableSignal<Responsable[]> = signal([]);

  windowTitle = `Responsables`;

  windowTitleEffect = effect(() => {
    if(this.responsablesArray().length != 0)
      untracked(() => 
        this.windowTitleService.setWindowTitle(
          this.windowTitle.concat(`(${this.responsablesArray().length})`)
        )
      );
    }
  );

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

  getResponsables(): void {
      this.responsableService.getResponsables().subscribe(responsablesReturned => this.responsablesArray.set(responsablesReturned));
  }

  ngOnInit(): void {
      this.getResponsables();

      this.windowTitleService.setWindowTitle(this.windowTitle);
  }

}
