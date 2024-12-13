import { Component, OnInit } from '@angular/core';
import { ComidaitemsService } from '../servicio/comidaitems.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(
    public ComidaList: ComidaitemsService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async removeReceta(receta: string){

    const alert = await this.alertController.create({
      header: 'Confirmacion',
      message: 'Borrar Receta?',
      buttons: [
        {
          text:'Si',
          handler: () => {
            this.ComidaList.removeReceta(receta);
          }
        },
        {
          text:'No',
          handler: () => {
            alert.dismiss()
          }
        }
      ]
    });

    await alert.present();

  }
}
