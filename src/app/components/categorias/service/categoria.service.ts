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
  private urlEndPoint = 'https://localhost:443/api/v1';
  constructor(private httpCliente: HttpClient, private router: Router) { }

  getData(url: string) {
    return this.httpCliente.get(`${this.urlEndPoint}/${url}`);
  }

public getCategoriasPage(page?: number): Observable<any> {
  return this.httpCliente.get(`${this.urlEndPoint}/categorias/page/${page}`);
}

  getCategorias() {
    return this.getData('/categorias');
  }

  create(categoria: CategoriaCreacionDTO): Observable<Categoria> {
    return this.httpCliente.post(`${this.urlEndPoint}/categorias`, categoria)
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
    return this.httpCliente.delete<Categoria>(`${this.urlEndPoint}/categorias/${id}`).pipe();
  }

  update(id: number, categoriaCreacionDTO: CategoriaCreacionDTO): Observable<any> {
    return this.httpCliente.put<any>(`${this.urlEndPoint}/categorias/${id}`, categoriaCreacionDTO).pipe(
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
          this.router.navigate(['/categorias/']);
        }
        return throwError(e);
      })
    );
  }

}
