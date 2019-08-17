import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { APP_ROUTING } from './app.routes';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { TipoEmpaqueComponent } from './components/tipo-empaque/tipo-empaque.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ModulosComponent,
    CategoriasComponent,
    TipoEmpaqueComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
