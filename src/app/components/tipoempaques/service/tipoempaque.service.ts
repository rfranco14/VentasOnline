import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoEmpaque } from '../tipo-empaque';
import { Router } from '@angular/router';
import { Observable, throwError, observable } from 'rxjs';
import { TipoEmpaqueCreacionDTO } from '../tipo-empaque-creacion-dto';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipoempaqueService {
  private urlEndPoint = 'https://localhost:443/api/v1';

  constructor(private httpCliente: HttpClient, private router: Router ) { }

  getData(url: string) {
  return this.httpCliente.get(`${this.urlEndPoint}/${url}`);
  }

  public getTipoEmpaquesPage(page?: number): Observable<any> {
    return this.httpCliente.get(`${this.urlEndPoint}/TipoEmpaque/page/${page}`);
  }

  getTipoEmpaques() {
    return this.getData('/TipoEmpaque');
  }

  create(tipoEmapque: TipoEmpaqueCreacionDTO): Observable<TipoEmpaque> {
    return this.httpCliente.post(`${this.urlEndPoint}/TipoEmpaque`, tipoEmapque)
    .pipe(
      map((response: any) => response as TipoEmpaque),
      catchError(e => {
        if (e.status === 400) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  delete(id: number): Observable<TipoEmpaque> {
    return this.httpCliente.delete<TipoEmpaque>(`${this.urlEndPoint}/TipoEmpaque/${id}`).pipe();
  }

  update(id: number, tipoEmpaqueCreacionDTO: TipoEmpaqueCreacionDTO): Observable<any> {
    return this.httpCliente.put<any>(`${this.urlEndPoint}/TipoEmpaque/${id}`, tipoEmpaqueCreacionDTO).pipe(
      catchError (e => {
        if (e.status === 400) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  getTipoEmpaque(id: number): Observable<TipoEmpaque> {
    return this.httpCliente.get<TipoEmpaque>(`${this.urlEndPoint}/TipoEmpaque${id}`).pipe(
      catchError (e => {
        if (e.status !== 401) {
          this.router.navigate(['/TipoEmpaque/']);
        }
        return throwError(e);
      })
    );
  }

}

