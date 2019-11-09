import { Component, OnInit } from '@angular/core';
import { ClienteService } from './service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: any [] = [];

  constructor( private clienteService: ClienteService ) {
    this.clienteService.getCliente().subscribe((data: any) => {this.clientes = data; console.log(data); });
  }

  ngOnInit() {
  }

}
