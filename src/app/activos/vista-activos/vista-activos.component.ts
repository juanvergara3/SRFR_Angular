import { Component, Signal, computed, signal, WritableSignal, inject } from '@angular/core';

import { Grupo } from 'src/app/interfaces/grupo';
import { GrupoService } from 'src/app/services/grupo.service';

import { Marca } from 'src/app/interfaces/marca';
import { MarcaService } from 'src/app/services/marca.service';

import { Tipo } from 'src/app/interfaces/tipo';
import { TipoService } from 'src/app/services/tipo.service';

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
  private marcaService = inject(MarcaService);
  private tipoService = inject(TipoService);

  public searchBarService = inject(SearchBarService);
  public windowTitleService = inject(WindowTitleService);
  private routerService = inject(RouterService);

  gruposArray: WritableSignal<Grupo[]> = signal([]);
  //marcasArray: WritableSignal<Marca[]> = signal([]);
  tiposArray: WritableSignal<Tipo[]> = signal([]);

  windowTitle = `Activos`;

  filterText: Signal<string> = computed(() => 
    this.searchBarService.searchTextSignal().toLocaleLowerCase()
  );

  filteredGruposArray: Signal<Grupo[]> = computed(() => 
    this.gruposArray().filter(grupo => 
      grupo?.nombre.toLowerCase().includes(this.filterText())
    )
  );

  getGrupos(): void {
    this.grupoService.getGrupos().subscribe(gruposReturned => this.gruposArray.set(gruposReturned));
  }

  // getMarcas(): void {
  //   this.marcaService.getMarcas().subscribe(marcasReturned => this.marcasArray.set(marcasReturned));
  // }

  getTipos(): void {
    this.tipoService.getTipos().subscribe(tiposReturned => this.tiposArray.set(tiposReturned));
  }

  refresh(){
    this.routerService.reload();
  }

  ngOnInit(): void {
    this.getGrupos();
    //this.getMarcas();
    this.getTipos();

    this.windowTitleService.setWindowTitle(this.windowTitle);
  }
}
