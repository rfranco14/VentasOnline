import { Component, OnInit, Input } from '@angular/core';
import { TipoEmpaque } from './tipo-empaque';
import { TipoEmpaqueCreacionDTO } from './tipo-empaque-creacion-dto';
import { TipoempaqueService } from './service/tipoempaque.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ModalTipoEmpaqueService } from './service/modal-tipo-empaque.service';
import { ProductoCreacionDTO } from '../productos/producto-creacion-dto';

@Component({
  selector: 'app-tipo-empaque-form',
  templateUrl: './tipo-empaque-form.component.html',
  styleUrls: ['./tipo-empaque-form.component.css']
})
export class TipoEmpaqueFormComponent implements OnInit {
  titulo: string;
  @Input() tipoEmpaque: TipoEmpaque;

  constructor(
    private tipoempaqueService: TipoempaqueService,
    private router: Router,
    public modalTipoEmpaqueService: ModalTipoEmpaqueService) { }

  ngOnInit() {
  }

  create(): void {
    const nuevo = new TipoEmpaqueCreacionDTO();
    nuevo.descripcion = this.tipoEmpaque.descripcion;
    this.tipoempaqueService.create(nuevo).subscribe(
      tipoEmpaque => {
        swal.fire('Nuevo Tipo Empaque', `El tipo de Empaque ${this.tipoEmpaque.descripcion} ha sido creado con éxito!!!`, 'success');
        this.modalTipoEmpaqueService.notificarCambio.emit(tipoEmpaque);
        this.modalTipoEmpaqueService.cerrarmodal();
        this.router.navigateByUrl('/TipoEmpaque');
        },
        error => {
          swal.fire('Nuevo Tipo de Empaque', `Error code ${error.status}`, 'error');
        }
    );
  }

  update(): void {
    const nuevo = new TipoEmpaqueCreacionDTO();
    nuevo.descripcion = this.tipoEmpaque.descripcion;
    this.tipoempaqueService.update(this.tipoEmpaque.codigoEmpaque, nuevo).subscribe(
      () => {
        swal.fire('Actualizar Tipo de Empaque', `El tipo de Empaque ${nuevo.descripcion} ha sido actualizado!!`, 'success');
        this.modalTipoEmpaqueService.notificarCambio.emit(this.tipoEmpaque);
        this.modalTipoEmpaqueService.cerrarmodal();
        this.router.navigateByUrl('/TipoEmpaque/page/');
      }
    );
  }

  cerrarmodal(): void {
    this.modalTipoEmpaqueService.cerrarmodal();
  }
}
