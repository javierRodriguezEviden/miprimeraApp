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
  nombre = 'Juan';
  apellido = 'Diaz';
  edad = 28;
  empresa = 'ATOS';

  /* getEdad(){
    return this.edad;
  } */

}
