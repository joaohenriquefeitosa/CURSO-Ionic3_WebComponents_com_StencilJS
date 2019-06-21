import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ActionSheetOptions} from 'ionic-angular';

/**
 * Generated class for the ActionSheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetPage');
  }

  apresentarActionSheet = () => {
    let actionSheetOptions: ActionSheetOptions = {
      title: "Opções",
      subTitle: "Opções do Usuário",
      enableBackdropDismiss: false,
      buttons: [
        {
          text: "Excluir",
          icon: "trash",
          role: "destructive"
        },
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Editar",
          icon: "create",
          handler: () => {
            console.log('Clicou em editar');
          }
        }        
      ]
    };

    actionSheetOptions.buttons = [...actionSheetOptions.buttons,{
      text: "Compartilhar",
      icon: "share",
      handler: () => {
        console.log('Compartilhou');
        return false; // quando retorna false a action sheet não é fechada
      }
    }];
    const actionSheet = this.actionSheetCtrl.create(actionSheetOptions);

    actionSheet.present();

    setTimeout(() => actionSheet.dismiss(), 3500);
  }

}
