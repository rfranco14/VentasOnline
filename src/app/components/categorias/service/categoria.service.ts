import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from '../categoria';
import { Router } from '@angular/router';
import { observable, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CategoriaCreacionDTO } from '../categoria-creacion-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private urlEndPoint = 'https://localhost:44370/api/v1';

  constructor(private httpCliente: HttpClient, private router: Router) { }

  /*getData(url: string) {
    const headers = new HttpHeaders();
    return this._httpCliente.get<Categoria[]>(`${this.API_URL}/${url}`, {headers});
  }*/

  getCategorias() {
    return this.httpCliente.get<Categoria[]>(`${this.urlEndPoint}/Categorias`);
  }

  create(categoria: CategoriaCreacionDTO): Observable<Categoria> {
    return this.httpCliente.post(`${this.urlEndPoint}/Categorias`, categoria)
      .pipe(
        map((response: any) => response as Categoria),
        catchError(e => {
          if (e.status === 400) {
            return throwError(e);
          }
          return throwError(e);
        })
      );
  }

  delete(id: number): Observable<Categoria> {
    return this.httpCliente.delete<Categoria>(`${this.urlEndPoint}/Categorias/${id}`).pipe();
  }

  update(id: number, categoriaCreacionDTO: CategoriaCreacionDTO): Observable<any> {
    return this.httpCliente.put<any>(`${this.urlEndPoint}/Categorias/${id}`, categoriaCreacionDTO).pipe(
      catchError(e => {
        if (e.status === 400) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  getCategoria(id: number): Observable<Categoria> {
    return this.httpCliente.get<Categoria>(`${this.urlEndPoint}/Categorias${id}`).pipe(
      catchError(e => {
        if (e.status !== 401) {
          this.router.navigate(['/Categorias/']);
        }
        return throwError(e);
      })
    );
  }

}
