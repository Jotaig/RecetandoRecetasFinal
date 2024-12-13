import { Component, OnInit } from '@angular/core';
import { ApiComidaService } from './apicomida.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})

export class CategoriasPage implements OnInit {

  comidas: any;
  titulo: string = 'Categorias Page'

  constructor(
    private apiComidaService: ApiComidaService) {}

  
  ngOnInit(): void {
    this.apiComidaService.obtenerComida().subscribe({
      next: (respuestaApi: any) => {
        console.log(respuestaApi);
        this.comidas = respuestaApi.categories;
        localStorage.setItem('Comiditas', JSON.stringify(respuestaApi));
      },
      error: (err) => {
        console.log('Error al obtener comiditas desde la api',err);
      }})
    }

} 

