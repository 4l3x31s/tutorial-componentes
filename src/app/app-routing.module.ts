import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  { path: '', component: EjemploComponent },
  { path: 'ejemplo', component: EjemploComponent },
  { path: 'prueba', component: PruebaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
