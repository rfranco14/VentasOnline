import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/service/auth.service';
import { Route, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() {
  }

    logout(): void {
      const username = this.authService.usuario.email;
      this.authService.logout();
      swal.fire('Logout', `Hola ${username}, has cerrado sesión con éxito!!!`, 'success');
      this.router.navigate(['/login']);
    }

}
