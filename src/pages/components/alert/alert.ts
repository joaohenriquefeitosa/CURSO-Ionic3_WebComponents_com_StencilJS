import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, AlertOptions } from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  mostrarAlertaBasico = () => {
    const alertaBasicoOpt: AlertOptions = {
      title: "Bem vindo ao ionic",
      subTitle: "Espero que esteja gostando",
      message: "Ionic Framework versão 3.x",
      buttons:["OK"],
      enableBackdropDismiss: false
    };

    const alertaBasico = this.alertCtrl.create(alertaBasicoOpt);

    alertaBasico.present();
  }
  
  mostrarAlertaPrompt = () => {
    const alertaPromptOpt: AlertOptions = {
      title: "Me diga o seu nome",
      buttons:[
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Confirmar",
          handler: (data) => {
            console.log(data.nome);
            return false;
          },
        }
      ],
      enableBackdropDismiss: false,
      inputs:[
        {
          name: "nome",
          type: "text",
          placeholder: "Digite um nome",
          label: "Nome"
        }
      ]
    };

    const alertaPrompt = this.alertCtrl.create(alertaPromptOpt);

    alertaPrompt.present();
  };

  mostrarAlertaConfirm = () =>{
    const alertaCorfimOpt: AlertOptions = {
      title: "Deseja realmente sair",
      subTitle: "Você irá perder todas as informações",
      buttons: [
        {
          role: "cancel",
          text: "Não"
        },
        {
          text: "Sim",
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    };
    
    const alertaCorfim = this.alertCtrl.create(alertaCorfimOpt);

    alertaCorfim.present();
  }

  mostrarAlertaRadio = () => {
    const alertRadioOpt: AlertOptions = {
      title: "Escolha uma cor",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
        },
        {
          text: "Ok",
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    };

    const alertRadio = this.alertCtrl.create(alertRadioOpt);

    alertRadio.addInput({
      checked: true,
      label: "Azul",
      value: "Azul",
      type: 'radio'
    });

    alertRadio.addInput({
      checked: false,
      label: "Marrom",
      value: "Marrom",
      type: 'radio'
    });

    alertRadio.addInput({
      checked: false,
      label: "Vermelho",
      value: "Vermelho",
      type: 'radio'
    });

    alertRadio.present();
  }

  mostrarAlertaCheckBox = () => {
    const alertCheckBoxOpt: AlertOptions = {
      title: "Quais você já jogou?",
      inputs: [
        {
          type: 'checkbox',
          label: 'Final Fantasy',
          value: 'final fantasy X'
        },
        {
          type: 'checkbox',
          label: 'Mario',
          value: 'Mario 64'
        },
        {
          type: 'checkbox',
          label: 'Mortal Kombat',
          value: 'Mortal Kombat'
        },
        {
          type: 'checkbox',
          label: 'Sonic',
          value: 'Sonic'
        }
      ]
    };

    const alertCheckBox = this.alertCtrl.create(alertCheckBoxOpt);

    alertCheckBox.addButton({
      text: 'Confirmar',
      handler: (data) => {
        console.log(data);
      }
    });

    alertCheckBox.addButton({
      text: 'Cancelar',
      role: 'cancel'
    });

    alertCheckBox.present();
  }

}
