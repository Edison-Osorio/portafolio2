import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MiInformacionComponent } from './mi-informacion/mi-informacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'about', component: MiInformacionComponent},
  {path:'proyectos', component: ProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
