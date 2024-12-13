import { Component, OnInit } from '@angular/core';
import { ComidaitemsService } from '../servicio/comidaitems.service';
import { AlertController } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public receta!: string;

  constructor(
    private ComidaList: ComidaitemsService,
    private alertController: AlertController,
    public photoService: PhotoService
  ) {}

  ngOnInit() {}

  addReceta(){
    console.log(this.receta);

    if (!this.ComidaList.existReceta(this.receta,)) {
      this.ComidaList.addReceta(this.receta);
      this.receta = '';
      console.log(this.ComidaList.recetas);
      this.alertSuccess();
    }else{
      this.alertError();
    }
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async alertSuccess(){
    const alert = await this.alertController.create({
      header: 'Creado',
      message: 'Añadido a tu Recetario',
      buttons: ['Ok']
    })
    await alert.present();
  }

  async alertError(){
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Ya existe',
      buttons: ['Ok']
    })
    await alert.present();
  }
}
