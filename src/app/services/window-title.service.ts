import { Injectable, Signal, WritableSignal, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowTitleService {

  composedTitleSignal: Signal<string> = computed(() =>
    `${this.windowTitleSignal()}(N/A)`
  );

  windowTitleSignal: WritableSignal<string> = signal('');
  amountSignal: WritableSignal<string> = signal('');

  setWindowTitle(text: string): void{
    this.windowTitleSignal.set(text);
  }
}
