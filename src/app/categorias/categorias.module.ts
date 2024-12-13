import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { CategoriasPageRoutingModule } from './categorias-routing.module';

import { CategoriasPage } from './categorias.page';
import { HttpClientModule } from '@angular/common/http';
import { ApiComidaService } from './apicomida.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasPageRoutingModule,
    HttpClientModule
  ],
  providers: [ApiComidaService],
  declarations: [CategoriasPage]
})
export class CategoriasPageModule {}
