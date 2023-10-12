import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

  
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpClient = inject(HttpClient);

  getRequest(url: string, params?: any) {
    if(params) {
      let queryParams = new HttpParams().append(params.name, params.value);
      
      return this.httpClient.get(url, {params: queryParams});
    }

    return this.httpClient.get(url);
  }

  postRequest(url: string, body: any) {
    let response = this.httpClient.post(url, body);

    return response;
  }

  patchRequest(url: string, body: any){
    let response = this.httpClient.patch(url, body);

    return response;
  }
}