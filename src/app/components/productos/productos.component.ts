import { Component, OnInit } from '@angular/core';
import { ProductoService } from './service/producto.service';
import { Producto } from './producto';
import swal from 'sweetalert2';
import { switchAll } from 'rxjs/operators';
import { ModalProductoService } from './service/modal-producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any[];
  productoSeleccionado: Producto;
  tipo: string;

  constructor(private productosService: ProductoService, private modalProductoService: ModalProductoService) {
    this.productosService.getProducto().subscribe((data: any) => {
      this.productos = data; /*console.log(data);*/
    });
  }

  ngOnInit() {
    this.modalProductoService.notificarCambio.subscribe(producto => {
      if (this.tipo === 'new') {
        this.productos.push(producto);
      } else if (this.tipo === 'update') {
        this.productos = this.productos.map(productoOriginal => {
          if (producto.codigoProducto === productoOriginal.codigoProducto) {
            productoOriginal = producto;
          }
          return productoOriginal;
        });
      }
    });
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
          this.productos = this.productos.filter(prod => prod !== producto);
          swal.fire('Producto eliminado!',
            `Producto ${producto.descripcion} eliminado con éxito!`,
            'success');
        }
      );
    });
  }

  abrirModal(producto?: Producto) {
    if (producto) {
      this.productoSeleccionado = producto;
      this.tipo = 'update';
    } else {
      this.tipo = 'new';
      this.productoSeleccionado = new Producto();
    }
    this.modalProductoService.abrirModal();
  }

}
