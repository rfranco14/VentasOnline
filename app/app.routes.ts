import { RouterModule, Route, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { TipoEmpaqueComponent } from './components/tipo-empaque/tipo-empaque.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'modulos', component: ModulosComponent },
    { path: 'categoria', component: CategoriasComponent },
    { path: 'tipo-empaque', component: TipoEmpaqueComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true});
