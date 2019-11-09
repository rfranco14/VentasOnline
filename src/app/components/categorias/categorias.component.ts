import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './service/categoria.service';
import { Categoria } from './categoria';
import swal from 'sweetalert2';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: any[] = [];

  constructor(private categoriaService: CategoriaService) {
    this.categoriaService.getCategorias().subscribe((data: any) => {
      this.categorias = data /*, console.log(data);*/});
  }

  ngOnInit() {
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

}
