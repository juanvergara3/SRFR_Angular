import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

  
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpClient = inject(HttpClient);

  getRequest(url: string) {
    return this.httpClient.get(url);
  }

  postRequest(url: string, body: any) {

    let response = this.httpClient.post(url, body);

    return response;
  }
}