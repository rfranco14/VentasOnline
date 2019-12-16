import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from './categoria';
import { CategoriaCreacionDTO } from './categoria-creacion-dto';
import { CategoriaService } from './service/categoria.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ModalCategoriasService } from './service/modal-categoria.service';
import { ProductoCreacionDTO } from '../productos/producto-creacion-dto';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {
  titulo: string;
  @Input() categoria: Categoria;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    public modalCategoriasService: ModalCategoriasService) {}

  ngOnInit() {
  }

  create(): void {
    // console.log(this.categoria);
    const nuevo = new CategoriaCreacionDTO();
    nuevo.descripcion = this.categoria.descripcion;
    this.categoriaService.create(nuevo).subscribe(
      categoria => {
        swal.fire('Nueva Categoria', `La categoria ${this.categoria.descripcion} ha sido creada con éxito!!!`, 'success');
        this.modalCategoriasService.notificarCambio.emit(categoria);
        this.modalCategoriasService.cerrarmodal();
        this.router.navigateByUrl('/categorias/page/');
      },
      error => {
        swal.fire('Nueva Categoria', `Error code ${error.status}`, 'error');
      }
    );
  }

  update(): void {
    const nuevo = new CategoriaCreacionDTO();
    nuevo.descripcion = this.categoria.descripcion;
    this.categoriaService.update(this.categoria.codigoCategoria, nuevo).subscribe(
     () => {
       swal.fire('Actualizar Categoria', `La categoria ${nuevo.descripcion} ha sido actualizado!!`, 'success');
       this.modalCategoriasService.notificarCambio.emit(this.categoria);
       this.modalCategoriasService.cerrarmodal();
       this.router.navigateByUrl('/categorias/page/');
     }
    );
  }

  cerrarmodal(): void {
    this.modalCategoriasService.cerrarmodal();
  }

}
