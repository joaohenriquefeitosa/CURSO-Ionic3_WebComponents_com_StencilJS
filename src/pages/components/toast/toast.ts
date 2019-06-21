import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController) {
  }

  apresentarToast = () => {
    const toast = this.toastCtrl.create({
      message: 'Esse é um toast',
      showCloseButton: true,
      closeButtonText: 'Ok',
      position: 'middle',
      cssClass: 'meu-toast'
    });

    toast.present();

    setTimeout(() => toast.setMessage('Confirme, por favor...'), 3000);
    
  }

}
