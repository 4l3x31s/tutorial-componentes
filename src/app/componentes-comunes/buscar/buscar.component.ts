import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BnUsuarios } from '../../dto/usuarios.dto';
import { BnRespuesta } from '../../dto/respuesta.dto';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  @Input('bnUsaurios')
  usuarios: BnUsuarios = <BnUsuarios>{};

  @Input('url')
  url: string = <string>{};

  @Output()
  evento = new EventEmitter<BnRespuesta>();

  constructor() { }

  ngOnInit(): void {

  }
  enviarEvento(){
    console.log(this.url);
    let  respuesta: BnRespuesta = {
      mensaje: "mensaje " + this.usuarios.nombre,
      estado: true
    }
    this.evento.emit(respuesta);
  }
}
