import { Component } from '@angular/core';
import { dataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ejemplos',
  templateUrl: './ejemplos.component.html',
  styleUrls: ['./ejemplos.component.css']
})
export class EjemplosComponent {
  menuItems?:any[];
  textoBuscar = "";
  check!: string;
  mostrarMensaje = true;
  mostrarMensajeOculto = false;

  texto!:string;
  color!:string;
  resultado:string = "Debe seleccionar un color";

  constructor(private servicios:dataService) { 
    this.menuItems=this.servicios.data;
  }
  
  Buscar(){
    this.menuItems=this.servicios.data.filter(m=>m.nombre.toLowerCase().includes(this.textoBuscar.toLowerCase()))
  }

  Borrar(){
    this.menuItems=this.servicios.data;
    this.textoBuscar = "";
  }

  onModelChange() {
    if (this.check) {
      this.mostrarMensaje = false;
      this.mostrarMensajeOculto = true;
    } else {
      this.mostrarMensaje = true;
      this.mostrarMensajeOculto = false;
    }
  }
  
}

