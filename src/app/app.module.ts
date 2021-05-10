import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { ComponentesComunesModule } from './componentes-comunes/componentes-comunes.module';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    EjemploComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesComunesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
