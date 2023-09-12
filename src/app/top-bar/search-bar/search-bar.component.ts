import { Component, EventEmitter } from '@angular/core';

import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(private searchBarService: SearchBarService) { }

  searchText: string = '';

  onSearchSubmit(){
    this.searchBarService.setSearch(this.searchText);
  }
}
