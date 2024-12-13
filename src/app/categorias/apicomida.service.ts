import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Comida {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}
@Injectable({
  providedIn: 'root'
})

export class ApiComidaService {

  private url = 'https://www.themealdb.com/api/json/v1/1/categories.php'

  constructor(
    private http:HttpClient
  ) { }

  obtenerComida():Observable<Comida> {
    return this.http.get<Comida>(this.url)
  }
}
