import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, observable, throwError } from 'rxjs';
import { Producto } from '../producto';
import { Categoria } from '../../categorias/categoria';
import { TipoEmpaque } from '../../tipoempaques/tipo-empaque';
import { catchError, map } from 'rxjs/operators';
import { ProductoCreacionDTO } from '../producto-creacion-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlEndPoint = 'https://localhost:443/api/v1';

  constructor(private httpCliente: HttpClient, private router: Router) { }

  /*getData(url: string) {
    const headers = new HttpHeaders();
    return this._httpCliente.get(`${this.API_URL}/${url}`, {headers});
  }*/
  getProducto(): Observable<Producto[]> {
    return this.httpCliente.get<Producto[]>(`${this.urlEndPoint}/producto`);
  }
  getCategoria() {
    return this.httpCliente.get<Categoria[]>(`${this.urlEndPoint}/categorias`);
  }

  getTipoEmpaques() {
    return this.httpCliente.get<TipoEmpaque[]>(`${this.urlEndPoint}/tipoEmpaque`);
  }

  create(producto: ProductoCreacionDTO): Observable<Producto> {
    return this.httpCliente.post(`${this.urlEndPoint}/producto`, producto)
      .pipe(
        map((response: any) => response as Producto),
        catchError(e => {
          if (e.status === 400) {
            return throwError(e);
          }
          return throwError(e);
        })
      );
  }

  delete(id: number): Observable<Producto> {
   return this.httpCliente.delete<Producto>(`${this.urlEndPoint}/producto/${id}`).pipe(catchError(e => {
    return throwError(e);
   }));
  }

  update(id: number, productoCreacionDTO: ProductoCreacionDTO): Observable<any> {
    return this.httpCliente.put<any>(`${this.urlEndPoint}/producto/${id}`, productoCreacionDTO).pipe(
      catchError(e => {
        if (e.status === 400) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  getProductos(id: number): Observable<Producto> {
    return this.httpCliente.get<Producto>(`${this.urlEndPoint}/producto/${id}`).pipe(
      catchError(e => {
        if (e.status !== 401) {
          this.router.navigate(['/producto/']);
        }
        return throwError(e);
      })
    );
  }

}
