import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NgforPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ngfor',
  templateUrl: 'ngfor.html',
})
export class NgforPage {

  public arr: any[] = [1, 2, 3, 4, 5];

  public person: any[] = [
    {name: "John", age: 23, notas: [1,2,3,4,5]},
    {name: "Paul", age: 75, notas: [1,2,3,4,5]},
    {name: "Mike", age: 38, notas: [1,2,3,4,5]},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NgforPage');
  }

}
