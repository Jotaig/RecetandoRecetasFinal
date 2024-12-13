import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComidaitemsService {

  public recetas: string[];
  public isEmpty: boolean;

  constructor() { 
    this.recetas = [];
    this.isEmpty =true;
  }

  addReceta(receta: string){
    this.recetas.push(receta);
    this.isEmpty = false;
  }

  removeReceta(receta: string){
    let index = this.recetas.findIndex(it => it === receta);
    if (index != -1){
      this.recetas.splice(index,1);
      if (this.recetas.length == 0){
        this.isEmpty = true;
      }
    }
  }

  existReceta(receta : string){
    const itemFound = this.recetas.find(it => it.toUpperCase().
    trim() === receta.toUpperCase().trim())
    return itemFound;
  }
}

