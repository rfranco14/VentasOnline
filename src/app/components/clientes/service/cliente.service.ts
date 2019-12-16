import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private API_URL = 'https://localhost:443/api/v1';
  private token = '';

  constructor(private _httpCliente: HttpClient) { }

  getData(url: string) {
    const headers = new HttpHeaders();
    return this._httpCliente.get(`${this.API_URL}/${url}`, {headers});
  }
  getCliente() {
    return this.getData('Cliente');
  }
}
