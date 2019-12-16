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
  categorias: Categoria[];
  tipoEmpaque: TipoEmpaque[];
  // productoDTO: ProductoCreacionDTO = new ProductoCreacionDTO();

  constructor(
    private categoriaService: CategoriaService,
    private tipoempaqueService: TipoempaqueService,
    private productoService: ProductoService,
    private router: Router,
    public modalProductoService: ModalProductoService) {}

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe((response: any) => this.categorias = response as Categoria[]);
    this.tipoempaqueService.getTipoEmpaques().subscribe((response: any) => this.tipoEmpaque = response as TipoEmpaque[]);
  }

  create() {
    console.log(this.producto);
    const nuevo = new ProductoCreacionDTO();
    nuevo.codigoCategoria = this.producto.categoria.codigoCategoria;
    nuevo.codigoEmpaque = this.producto.tipoEmpaque.codigoEmpaque;
    nuevo.descripcion = this.producto.descripcion;
    this.productoService.create(nuevo).subscribe(
      producto => {
        swal.fire('Nuevo producto', `El producto ${this.producto.descripcion} ha sido creado con exito!!!`, 'success');
        producto.categoria = this.producto.categoria;
        producto.tipoEmpaque = this.producto.tipoEmpaque;
        this.modalProductoService.notificarCambio.emit(producto);
        this.modalProductoService.cerrarmodal();
        this.router.navigateByUrl('/productos');
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
        swal.fire('Actualizar Producto', `El producto ${nuevo.descripcion} ha sido actualizado!!`, 'success');
        /*console.log('Respuesta' + JSON.stringify(this.producto));*/
        this.modalProductoService.notificarCambio.emit(this.producto);
        this.modalProductoService.cerrarmodal();
        this.router.navigate(['/productos']);
      }
    );
  }

  cerrarModal(): void {
    this.modalProductoService.cerrarmodal();
  }

  compararCategoria(o1: Categoria, o2: Categoria): boolean {
    if (o1 === undefined && o2 === undefined) {
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.codigoCategoria === o2.codigoCategoria;
  }

  compararTipoEmpaque(o1: TipoEmpaque, o2: TipoEmpaque): boolean {
    if (o1 === undefined && o2 === undefined) {
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.codigoEmpaque === o2.codigoEmpaque;
  }
}
