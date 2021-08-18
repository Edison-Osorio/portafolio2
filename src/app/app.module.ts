import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { MiInformacionComponent } from './mi-informacion/mi-informacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InicioComponent, MiInformacionComponent, ProyectosComponent, PiePaginaComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
