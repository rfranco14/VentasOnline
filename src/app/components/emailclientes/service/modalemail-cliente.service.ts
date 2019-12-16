import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalEmailClienteService {
  modal: boolean = false;
  private _modificarCambio = new EventEmitter<any>();

  constructor() { }

  abrirModal() {
    this.modal = true;
}

cerrarmodal() {
    this.modal = false;
}

get notificarCambio(): EventEmitter<any> {
    return this._modificarCambio;
}
}
