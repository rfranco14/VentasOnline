import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria';
import { CategoriaCreacionDTO } from './categoria-creacion-dto';
import { CategoriaService } from './service/categoria.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {
  titulo: string;
  categoria: Categoria = new Categoria();
  categoriaDTO: CategoriaCreacionDTO = new CategoriaCreacionDTO();

  constructor(
    private categoriaService: CategoriaService,
    private router: Router) {
    }

  ngOnInit() {
  }

  create(): void {
    /*console.log(this.categoria);*/
    this.categoriaService.create(this.categoriaDTO).subscribe(
      categoria => {
        this.router.navigate(['/categorias']);
        swal.fire('Nueva Categoria', `La categoria ${this.categoria.descripcion} ha sido creada con éxito!!!`, 'success');
      },
      error => {
        swal.fire('Nueva Categoria', `Error code ${error.status}`, 'error');
      }
    );
  }

}
