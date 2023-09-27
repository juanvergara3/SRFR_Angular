import { Component, EventEmitter, inject } from '@angular/core';

import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  private searchBarService = inject(SearchBarService);

  searchText: string = '';

  onSearchSubmit(){
    this.searchBarService.setSearch(this.searchText);
  }
}
