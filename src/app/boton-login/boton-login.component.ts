
import { Component } from '@angular/core';

@Component({
  selector: 'app-boton-login',
  templateUrl: './boton-login.component.html',
  styleUrls: ['./boton-login.component.scss']
})
export class BotonLoginComponent {
  public alertButtons = ['Confirmar'];
  public alertInputs = [
    { 
      placeholder: 'Nombre de la receta',
    },
    {
      placeholder: 'Categoria',
    },
    {
      placeholder: 'Descripcion',
    },
    {
      placeholder: 'Ingredientes',
    },
  ];
}
