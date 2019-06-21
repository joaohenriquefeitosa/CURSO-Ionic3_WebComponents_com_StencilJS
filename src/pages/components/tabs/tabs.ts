import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  public tabs: Array<{icone: string, nome: string, componente: string, badge: number}> = [
    {icone: "alarm", nome: "Despertador", componente:"SpinnerPage", badge: Math.round(Math.random() * 30)},
    {icone: "apps", nome: "Aplicativos", componente:"SegmentPage", badge: Math.round(Math.random() * 30)},
    {icone: "bookmarks", nome: "Salvos", componente:"RangePage", badge: Math.round(Math.random() * 30)}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
