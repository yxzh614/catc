import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
const positions = [
  'top',
  'bottom'
]
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  index: number
  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {
    this.index = 0;
  }
  presentToast() {
    let position = positions[this.index];
    this.index++;
    this.index = this.index % 2;

    const toast = this.toastCtrl.create({
      message: '猫猫没有啦',
      duration: 500,
      showCloseButton: true,
      closeButtonText: '喵',
      position: position
    });
    toast.present();
  }
}
