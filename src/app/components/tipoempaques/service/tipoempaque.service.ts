import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoEmpaque } from '../tipo-empaque';

@Injectable({
  providedIn: 'root'
})
export class TipoempaqueService {
  private API_URL = 'https://localhost:44370/api/v1';
  private token = '';
  constructor(private _httpCliente: HttpClient ) { }

  getData(url: string) {
  const headers = new HttpHeaders();
  return this._httpCliente.get<TipoEmpaque[]>(`${this.API_URL}/${url}`, {headers});
  }
  getTipoEmpaque() {
    return this.getData('TipoEmpaque');
  }
}
