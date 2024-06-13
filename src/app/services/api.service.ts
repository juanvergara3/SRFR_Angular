import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpClient = inject(HttpClient);

  backendHost: string = 'http://192.168.5.44:3000/';

  getRequest(url: string, params?: any) {
    if (params) {
      let queryParams = new HttpParams().append(params.name, params.value);

      return this.httpClient.get(this.getCompositeUrl(url), { params: queryParams });
    }

    return this.httpClient.get(this.getCompositeUrl(url));
  }

  postRequest(url: string, body: any) {
    let response = this.httpClient.post(this.getCompositeUrl(url), body);

    return response;
  }

  patchRequest(url: string, body: any) {
    let response = this.httpClient.patch(this.getCompositeUrl(url), body);

    return response;
  }

  private getCompositeUrl(url: string): string {
    return `${this.backendHost}${url}`;
  }
}
