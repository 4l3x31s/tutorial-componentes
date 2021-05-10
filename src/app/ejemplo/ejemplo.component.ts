import { Component, OnInit } from '@angular/core';
import { BnUsuarios } from '../dto/usuarios.dto';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent implements OnInit {

  public usuarios: BnUsuarios = <BnUsuarios>{}

  constructor() { }

  ngOnInit(): void {
    this.usuarios = {
      nombre: 'Juan',
      telefono: 123123
    }
  }
  respuestaRecibida(evento: any){
    console.log(evento);
  }
}
