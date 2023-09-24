import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  backendHost: string = 'http://localhost:3000';

  getRoute(): string {

    return this.backendHost + this.router.url;
  }
}