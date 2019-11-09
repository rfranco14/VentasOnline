import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalProductoService {
modal: boolean = false;

  constructor() { }

abrirModal() {
  this.modal = true;
}

cerrarmodal() {
  this.modal = false;
}


}
