import { Component, OnInit } from '@angular/core';
import { EmailCliente } from './emailCliente';
import { EmailclienteService } from './service/emailcliente.service';
import { ActivatedRoute } from '@angular/router';
import { ModalEmailClienteService } from './service/modalemail-cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-emailclientes',
  templateUrl: './emailclientes.component.html',
  styleUrls: ['./emailclientes.component.css']
})
export class EmailclientesComponent implements OnInit {
  emailclientes: any[];
  emailClienteSeleccionado: EmailCliente;
  tipo: string;
  paginador: any;

  constructor(private emailclienteService: EmailclienteService, private activatedRoute: ActivatedRoute, private modalEmailClienteService: ModalEmailClienteService ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = + params.get('page');
      if ( !page ) {
        page = 0;
      }
      this.emailclienteService.getEmailClientePage(page).subscribe((response: any) => {
        this.emailclientes = response.content as EmailCliente[];
        this.paginador = response;
    });
  });

    this.modalEmailClienteService.notificarCambio.subscribe(emailCliente => {
    if (this.tipo === 'new') {
      this.emailclientes.push(emailCliente);
    } else if (this.tipo === 'update') {
      this.emailclientes = this.emailclientes.map(emailClienteOriginal => {
        if (emailCliente.codigoEmail === emailClienteOriginal.codigoEmail) {
          emailClienteOriginal = emailCliente;
        }
        return emailClienteOriginal;
      });
    }
  });
  }

  delete(emailCliente: EmailCliente): void {
    swal.fire({
      title: 'Eliminar Tipo Empaque',
      text: '¿Está seguro de eliminar el registro?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#D33',
      confirmButtonText: 'Si elegir',
      cancelButtonText: 'No cancelar!',
      confirmButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      this.emailclienteService.delete(emailCliente.codigoEmail).subscribe(
        () => {
          this.emailclientes = this.emailclientes.filter(cate => cate !== emailCliente)
          swal.fire('Email Cliente Eliminado!',
          `Email de Cliente ${emailCliente.codigoEmail} eliminado con éxito!`,
          'success');
        }
      );
    });
  }

  abrirModal(emailCliente?: EmailCliente) {
    if (emailCliente) {
      this.emailClienteSeleccionado = emailCliente;
      this.tipo = 'update';
    } else {
      this.tipo = 'new';
      this.emailClienteSeleccionado = new EmailCliente();
    }
    this.modalEmailClienteService.abrirModal();
  }

}
