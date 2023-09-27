import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowTitleService {

  windowTitleSignal: WritableSignal<string> = signal('');

  setWindowTitle(text: string): void{
    this.windowTitleSignal.set(text);
  }
}
