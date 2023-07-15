import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  
  // Esta variable (@Input) recibe datos por argumentos desde el componente Padre (App)
  // Recibe un array desde componente App
  @Input() data:any;

  
}
