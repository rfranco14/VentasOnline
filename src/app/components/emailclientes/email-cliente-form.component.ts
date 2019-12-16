import { Component, OnInit, Input } from '@angular/core';
import { EmailCliente } from './emailCliente';
import { EmailclienteService } from './service/emailcliente.service';
import { Router } from '@angular/router';
import { ModalEmailClienteService } from './service/modalemail-cliente.service';
import { EmailClienteCreacionDTO } from './emailCliente-creacion-dto';
import swal from 'sweetalert2';

@Component({
  selector: 'app-email-cliente-form',
  templateUrl: './email-cliente-form.component.html',
  styleUrls: ['./email-cliente-form.component.css']
})
export class EmailClienteFormComponent implements OnInit {
  titulo: string;
  @Input() emailCliente: EmailCliente;

  constructor(
    private emailclienteService: EmailclienteService,
    private router: Router,
    public modalEmailClienteService: ModalEmailClienteService) { }

  ngOnInit() {
  }

  create(): void {
    const nuevo = new EmailClienteCreacionDTO();
    nuevo.email = this.emailCliente.email;
    this.emailclienteService.create(nuevo).subscribe(
      emailCliente => {
        swal.fire('Nuevo Email de Cliente', `El email del Cliente ${this.emailCliente.email} ha sido creado con éxito!!!`, 'success');
        this.modalEmailClienteService.notificarCambio.emit(emailCliente);
        this.modalEmailClienteService.cerrarmodal();
        this.router.navigateByUrl('/EmailCliente');
        },
        error => {
          swal.fire('Nuevo email del cliente', `Error code ${error.status}`, 'error');
        }
    );
  }

  update(): void {
    const nuevo = new EmailClienteCreacionDTO();
    nuevo.email = this.emailCliente.email;
    this.emailclienteService.update(this.emailCliente.codigoEmail, nuevo).subscribe(
      () => {
        swal.fire('Actualizar el email del cliente', `El email del cliente ${nuevo.email} ha sido actualizado!!`, 'success');
        this.modalEmailClienteService.notificarCambio.emit(this.emailCliente);
        this.modalEmailClienteService.cerrarmodal();
        this.router.navigateByUrl('/EmailCliente/page/');
      }
    );
  }

  cerrarmodal(): void {
    this.modalEmailClienteService.cerrarmodal();
  }
}
