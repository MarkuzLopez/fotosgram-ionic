import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiservicesService {

  constructor(private alertController: AlertController,
              private toastController: ToastController) { }

  async alertaMensaje(message: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }

}
