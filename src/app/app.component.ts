import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gft-fe-gc-angular_componentes_problema1-07-2023';

  // Variables
  nombre = '';
  cif = '';
  direccion = '';
  grupo = '';
  clientes:any = [];

// Metodo para añadir clientes al array
  addCliente(){
    this.clientes.push({
      'nombre' : this.nombre,
      'cif' : this.cif,
      'direccion' : this.direccion,
      'grupo' : this.grupo
    });
  }
}
