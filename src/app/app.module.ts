import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CategoriaService } from './components/categorias/service/categoria.service';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './components/login/interceptors/token';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ComprasComponent } from './components/compras/compras.component';
import { DetallecomprasComponent } from './components/detallecompras/detallecompras.component';
import { DetallefacturasComponent } from './components/detallefacturas/detallefacturas.component';
import { EmailclientesComponent } from './components/emailclientes/emailclientes.component';
import { EmailproveedoresComponent } from './components/emailproveedores/emailproveedores.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { InventariosComponent } from './components/inventarios/inventarios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { TelefonoclientesComponent } from './components/telefonoclientes/telefonoclientes.component';
import { TelefonoproveedoresComponent } from './components/telefonoproveedores/telefonoproveedores.component';
import { TipoempaquesComponent } from './components/tipoempaques/tipoempaques.component';
import { ProductoFormComponent } from './components/productos/producto-form.component';
import { AuthInterceptor } from './components/login/interceptors/auth.interceptor';
import { CategoriaFormComponent } from './components/categorias/categoria-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    CategoriasComponent,
    LoginComponent,
    ClientesComponent,
    ComprasComponent,
    DetallecomprasComponent,
    DetallefacturasComponent,
    EmailclientesComponent,
    EmailproveedoresComponent,
    FacturasComponent,
    InventariosComponent,
    ProductosComponent,
    ProveedoresComponent,
    TelefonoclientesComponent,
    TelefonoproveedoresComponent,
    TipoempaquesComponent,
    ProductoFormComponent,
    CategoriaFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
