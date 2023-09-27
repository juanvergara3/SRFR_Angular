import { Component, Signal, computed } from '@angular/core';

import { WindowTitleService } from '../services/window-title.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(public windowTitleService: WindowTitleService) {}

  windowTitle:Signal<string> = computed(() => this.windowTitleService.windowTitleSignal());
}
