import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BadgesChipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-badges-chips',
  templateUrl: 'badges-chips.html',
})
export class BadgesChipsPage {

  public amigos: number = 20;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BadgesChipsPage');
  }

  addAmigos = () => {
    this.amigos += 1;
  }

  deletarPin = (chip: HTMLElement) => {
    chip.remove();
  }

}
