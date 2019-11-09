import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { LoginComponent } from './components/login/login.component';
import { AuthguardGuard } from './components/login/guards/authguard.guard';
import { ClientesComponent } from './components/clientes/clientes.component';
import { TipoempaquesComponent } from './components/tipoempaques/tipoempaques.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoFormComponent } from './components/productos/producto-form.component';
import { Component } from '@angular/core';
import { CategoriaFormComponent } from './components/categorias/categoria-form.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthguardGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'categorias', component : CategoriasComponent, canActivate: [AuthguardGuard]},
    { path: 'clientes', component : ClientesComponent, canActivate: [AuthguardGuard] },
    { path: 'productos', component : ProductosComponent, canActivate: [AuthguardGuard]},
    { path: 'tipoempaques', component: TipoempaquesComponent, canActivate: [AuthguardGuard]},
    { path: 'categoriaForm', component: CategoriaFormComponent, canActivate: [AuthguardGuard]},
    { path: 'productoForm', component: ProductoFormComponent, canActivate: [AuthguardGuard]},
    { path: '**', pathMatch : 'full', redirectTo : 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash : true});
