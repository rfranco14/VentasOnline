import { Categoria } from '../categorias/categoria';
import { TipoEmpaque } from '../tipoempaques/tipo-empaque';
export class Producto {
    codigoProducto: number;
    codigoCategoria: number;
    codigoEmpaque: number;
    categoria: Categoria;
    tipoEmpaque: TipoEmpaque;
    descripcion: string;
    precioUnitario: number;
    precioPorDocena: number;
    precioPorMayor: number;
    existencia: number;
    imagen: string;
}
