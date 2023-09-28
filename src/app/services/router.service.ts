import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  private router = inject(Router);

  backendHost: string = 'http://localhost:3000';

  getRoute(): string {

    return this.backendHost + this.router.url;
  }

  reload(): void {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
}