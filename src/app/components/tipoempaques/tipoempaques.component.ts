import { Component, OnInit } from '@angular/core';
import { TipoempaqueService } from './service/tipoempaque.service';

@Component({
  selector: 'app-tipoempaques',
  templateUrl: './tipoempaques.component.html',
  styleUrls: ['./tipoempaques.component.css']
})
export class TipoempaquesComponent implements OnInit {
  tipoempaques: any [] = [];

  constructor(private tipoempaquesService: TipoempaqueService ) {
    this.tipoempaquesService.getTipoEmpaque().subscribe((data: any) => {this.tipoempaques = data; console.log(data); });
   }

  ngOnInit() {
  }

}
