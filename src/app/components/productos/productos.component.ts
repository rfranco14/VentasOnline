import { Component, OnInit } from '@angular/core';
import { ProductoService } from './service/producto.service';
import { Producto } from './producto';
import swal from 'sweetalert2';
import { ModalProductoService } from './service/modal-producto.service';
import { ProductoCreacionDTO } from './producto-creacion-dto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any[];
  productoSeleccionado: Producto;
  id: number;

  constructor(private productosService: ProductoService, private modalProductoService: ModalProductoService) {
    this.productosService.getProducto().subscribe((data: any) => {
      this.productos = data; /*console.log(data);*/
    });
  }

  ngOnInit() {

  }

  delete(producto: Producto): void {
    swal.fire({
      title: 'Eliminar producto',
      text: 'Está seguro de Eliminar el registro?',
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
      this.productosService.delete(producto.codigoProducto).subscribe(
        () => {
          this.productos = this.productos.filter(prod => prod !== producto)
          swal.fire('Producto eliminado!',
            `Producto ${producto.descripcion} eliminado con éxito!`,
            'success');
        }
      );
    });
  }

  abrirModal(producto?: Producto) {
    if (producto) {
     /* this.productoSeleccionado = new Producto();
      this.productoSeleccionado.codigoCategoria = producto.categoria.codigoCategoria;
      this.productoSeleccionado.codigoEmpaque = producto.tipoEmpaque.codigoEmpaque;
      this.productoSeleccionado.descripcion = producto.descripcion;
      this.id = producto.codigoProducto;*/
      this.productoSeleccionado = producto;
      this.modalProductoService.abrirModal();
    } /*else {
      this.id = null;
    }*/
  }

}
