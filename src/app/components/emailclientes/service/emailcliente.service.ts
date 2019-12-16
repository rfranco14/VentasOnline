import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EmailClienteCreacionDTO } from '../emailCliente-creacion-dto';
import { EmailCliente } from '../emailCliente';

@Injectable({
  providedIn: 'root'
})
export class EmailclienteService {
  private urlEndPoint = 'https://localhost:443/api/v1';

  constructor(private httpCliente: HttpClient, private router: Router) { }

  getData(url: string) {
    return this.httpCliente.get(`${this.urlEndPoint}/${url}`);
  }

  public getEmailClientePage(page?: number): Observable<any> {
    return this.httpCliente.get(`${this.urlEndPoint}/EmailCliente/page/${page}`);
  }

  getEmailClientes() {
    return this.getData('/EmailCliente');
  }

  create(emailCliente: EmailClienteCreacionDTO): Observable<EmailCliente> {
    return this.httpCliente.post(`${this.urlEndPoint}/EmailCliente`, emailCliente)
      .pipe(
        map((response: any) => response as EmailCliente),
        catchError(e => {
          if (e.status === 400) {
            return throwError(e);
          }
          return throwError(e);
        })
      );
    }

    delete(id: number): Observable < EmailCliente > {
      return this.httpCliente.delete<EmailCliente>(`${this.urlEndPoint}/EmailCliente/${id}`).pipe();
  }

  update(id: number, emailClienteCreacionDTO: EmailClienteCreacionDTO): Observable<any> {
    return this.httpCliente.put<any>(`${this.urlEndPoint}/EmailCliente/${id}`, emailClienteCreacionDTO).pipe(
      catchError(e => {
        if (e.status === 400) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  getEmailCliente(id: number): Observable<EmailCliente> {
    return this.httpCliente.get<EmailCliente>(`${this.urlEndPoint}/EmailCliente${id}`).pipe(
      catchError(e => {
        if (e.status !== 401) {
          this.router.navigate(['/EmailCliente/']);
        }
        return throwError(e);
      })
    );
  }


}
