import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { airplane, bluetooth, call, wifi } from 'ionicons/icons';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss'],
})
export class ListaClienteComponent {
  constructor() {

    addIcons({ airplane, bluetooth, call, wifi });
  }
}

