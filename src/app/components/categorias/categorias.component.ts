import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './service/categoria.service';
import { Categoria } from './categoria';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { ModalCategoriasService } from './service/modal-categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: any[];
  categoriaSeleccionado: Categoria;
  tipo: string;
  paginador: any;

  constructor(private categoriaService: CategoriaService, private activatedRoute: ActivatedRoute, private modalCategoriaService: ModalCategoriasService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = + params.get('page');
      if ( !page ) {
        page = 0;
      }
      this.categoriaService.getCategoriasPage(page).subscribe((response: any) => {
        this.categorias = response.content as Categoria[];
        this.paginador = response;
      });
    });

    this.modalCategoriaService.notificarCambio.subscribe(categoria => {
      if (this.tipo === 'new') {
        this.categorias.push(categoria);
      } else if (this.tipo === 'update') {
        this.categorias = this.categorias.map(categoriaOriginal => {
          if (categoria.codigoCategoria === categoriaOriginal.codigoCategoria) {
            categoriaOriginal = categoria;
          }
          return categoriaOriginal;
        });
      }
    });
  }

  delete(categoria: Categoria): void {
    swal.fire({
      title: 'Eliminar categoría',
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
      this.categoriaService.delete(categoria.codigoCategoria).subscribe(
        () => {
          this.categorias = this.categorias.filter(cate => cate !== categoria)
          swal.fire('Categoria Eliminada!',
            `Categoria ${categoria.descripcion} eliminada con éxito!`,
          'success');
        }
      );
    });
}

abrirModal(categoria?: Categoria) {
  if (categoria) {
    this.categoriaSeleccionado = categoria;
    this.tipo = 'update';
  } else {
    this.tipo = 'new';
    this.categoriaSeleccionado = new Categoria();
  }
  this.modalCategoriaService.abrirModal();
}

}
