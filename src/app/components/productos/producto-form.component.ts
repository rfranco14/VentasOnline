import { Component, OnInit, Input } from '@angular/core';
import { Producto } from './producto';
import { Categoria } from '../categorias/categoria';
import { CategoriaService } from '../categorias/service/categoria.service';
import { TipoEmpaque } from '../tipoempaques/tipo-empaque';
import { TipoempaqueService } from '../tipoempaques/service/tipoempaque.service';
import { ProductoService } from './service/producto.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ProductoCreacionDTO } from './producto-creacion-dto';
import { ModalProductoService } from './service/modal-producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  titulo: string;
  @Input() producto: Producto;
  @Input() id: number;
  categorias: Categoria[];
  tipoEmpaque: TipoEmpaque[] = [];
  // productoDTO: ProductoCreacionDTO = new ProductoCreacionDTO();

  constructor(
    private categoriaService: CategoriaService,
    private tipoempaqueService: TipoempaqueService,
    private productoService: ProductoService,
    private router: Router,
    private modalProductoService: ModalProductoService) {
  }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(categorias => this.categorias = categorias);
    this.tipoempaqueService.getTipoEmpaque().subscribe(tipoEmpaque => this.tipoEmpaque = tipoEmpaque);
    /*if (this.id) {
      this.producto = new ProductoCreacionDTO();
      this.titulo = 'Agregar';
    } else {
      this.titulo = 'Modificar';
    }*/
  }

  create(): void {
    console.log(this.producto);
    /*this.producto.codigoCategoria = this.producto.categoria.codigoCategoria;
    this.producto.codigoEmpaque = this.producto.tipoEmpaque.codigoEmpaque;*/
    this.productoService.create(this.producto).subscribe(
      producto => {
        this.router.navigate(['/producto']);
        swal.fire('Nuevo producto', `El producto ${this.producto.descripcion} ha sido creado con exito!!!`, 'success');
        // this.router.navigate(['/productos']);
        this.modalProductoService.cerrarmodal();
      },
      error => {
        swal.fire('Nuevo Producto', `Error code ${error.status}`, 'error');
      }
    );
  }

  update(): void {
    const nuevo = new ProductoCreacionDTO();
    nuevo.codigoCategoria = this.producto.codigoCategoria;
    nuevo.codigoEmpaque = this.producto.codigoEmpaque;
    nuevo.descripcion = this.producto.descripcion;
    this.productoService.update(this.producto.codigoProducto, nuevo).subscribe(
      () => { 
       /* this.router.navigate(['/producto']);*/
        swal.fire('Actualizar Producto', `El producto ${this.producto.descripcion} ha sido actualizado!!`, 'success');
        /*console.log('Respuesta' + JSON.stringify(this.producto));*/
        this.modalProductoService.cerrarmodal();
        this.producto = null;
      }
    );
  }

  cerrarModal(): void {
    this.modalProductoService.cerrarmodal();
  }
}
