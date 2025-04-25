import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  standalone: false,
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'

  // Componente inline (solo si son extremadamente simples)
  //template: '<p>Aqui iria un empleado!</p>',
  //styles: ["p{background-color: red;}"]
})
export class EmpleadoComponent {
  nombre = 'Javi';
  apellido = 'Diaz';
  edad = 28;
  //empresa = 'ATOS';
  habilitacionCuadro = false;
  usuRegistrado = false;
  textoDeRegistro = 'No hay nadie registrado';

  /* getEdad(){
    return this.edad;
  } */

  getRegistroUsuario(){
    this.usuRegistrado = false;
  }
  setUsuarioRegistrado(event: Event){
    //alert ("El usuario se acaba de registrar")
    //this.textoDeRegistro = 'El usuario se acaba de registrar';
    if((<HTMLInputElement>event.target).value == 'si') {
      this.textoDeRegistro = 'El usuario se acaba de registrar';
    } else{
      this.textoDeRegistro = 'No hay nadie registrado';
    }
  }

  llamaEmpresa(value: String){}



}
