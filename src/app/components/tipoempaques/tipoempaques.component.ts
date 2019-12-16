import { Component, OnInit } from '@angular/core';
import { TipoempaqueService } from './service/tipoempaque.service';
import { TipoEmpaque } from './tipo-empaque';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { ModalTipoEmpaqueService } from './service/modal-tipo-empaque.service';

@Component({
  selector: 'app-tipoempaques',
  templateUrl: './tipoempaques.component.html',
  styleUrls: ['./tipoempaques.component.css']
})
export class TipoempaquesComponent implements OnInit {
  tipoempaques: any[];
  tipoEmpaqueSeleccionado: TipoEmpaque;
  tipo: string;
  paginador: any;

  constructor(private tipoempaqueService: TipoempaqueService, private activatedRoute: ActivatedRoute, private modalTipoEmpaqueService: ModalTipoEmpaqueService ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = + params.get('page');
      if ( !page ) {
        page = 0;
      }
      this.tipoempaqueService.getTipoEmpaquesPage(page).subscribe((response: any) => {
        this.tipoempaques = response.content as TipoEmpaque[];
        this.paginador = response;
    });
  });

    this.modalTipoEmpaqueService.notificarCambio.subscribe(tipoEmpaque => {
    if (this.tipo === 'new') {
      this.tipoempaques.push(tipoEmpaque);
    } else if (this.tipo === 'update') {
      this.tipoempaques = this.tipoempaques.map(tipoEmpaqueOriginal => {
        if (tipoEmpaque.codigoEmpaque === tipoEmpaqueOriginal.codigoEmpaque) {
          tipoEmpaqueOriginal = tipoEmpaque;
        }
        return tipoEmpaqueOriginal;
      });
    }
  });
  }

  delete(tipoEmpaque: TipoEmpaque): void {
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
      this.tipoempaqueService.delete(tipoEmpaque.codigoEmpaque).subscribe(
        () => {
          this.tipoempaques = this.tipoempaques.filter(cate => cate !== tipoEmpaque)
          swal.fire('Tipo Empaque Eliminado!',
          `Tipo Empaque ${tipoEmpaque.descripcion} eliminada con éxito!`,
          'success');
        }
      );
    });
  }

  abrirModal(tipoEmpaque?: TipoEmpaque) {
    if (tipoEmpaque) {
      this.tipoEmpaqueSeleccionado = tipoEmpaque;
      this.tipo = 'update';
    } else {
      this.tipo = 'new';
      this.tipoEmpaqueSeleccionado = new TipoEmpaque();
    }
    this.modalTipoEmpaqueService.abrirModal();
  }

}
