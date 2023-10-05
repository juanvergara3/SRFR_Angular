import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  searchTextSignal: WritableSignal<string> = signal('');

  setSearch(text: string): void{
    this.searchTextSignal.set(text);
  }
}