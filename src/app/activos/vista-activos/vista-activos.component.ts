import { Component, Signal, computed, signal, WritableSignal, inject, effect, untracked} from '@angular/core';

import { Grupo } from 'src/app/interfaces/grupo';
import { GrupoService } from 'src/app/services/grupo.service';

import { SearchBarService } from 'src/app/services/search-bar.service';
import { WindowTitleService } from 'src/app/services/window-title.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'vista-activos',
  templateUrl: './vista-activos.component.html',
  styleUrls: ['./vista-activos.component.css']
})
export class VistaActivosComponent {

  private grupoService = inject(GrupoService);

  public searchBarService = inject(SearchBarService);
  public windowTitleService = inject(WindowTitleService);
  private routerService = inject(RouterService);

  gruposArray: WritableSignal<Grupo[]> = signal([]);

  windowTitle = `Activos`;
  activosAmount: WritableSignal<number> = signal(0);

  windowTitleEffect = effect(() => {
    if(this.activosAmount() != 0)
      untracked(() => 
      this.windowTitleService.setWindowTitle(
        this.windowTitle.concat(`(${this.activosAmount()})`)
      ));
    }
  );

  filterText: Signal<string> = computed(() => 
    this.searchBarService.searchTextSignal().toLocaleLowerCase()
  );

  filteredGruposArray: Signal<Grupo[]> = computed(() => 
    this.gruposArray().filter(grupo => 
      grupo?.nombre.toLowerCase().includes(this.filterText())
    )
  );

  updateActivosAmount(amount: number) {
    this.activosAmount.set(this.activosAmount() + amount);
  }

  getGrupos(): void {
    this.grupoService.getGrupos().subscribe(gruposReturned => this.gruposArray.set(gruposReturned));
  }

  refresh(){
    this.routerService.reload();
  }

  ngOnInit(): void {
    this.getGrupos();

    this.windowTitleService.setWindowTitle(this.windowTitle);
  }
}
