import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos.service';
import { AgregarPage } from '../agregar/agregar';
import { DetallePage } from '../detalle/detalle';
/**
 * Generated class for the PendientesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terminadas',
  templateUrl: 'terminadas.html',
})
export class TerminadasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _listaDeseosService:ListaDeseosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendientesPage');
  }

  irAgregar(){
	  this.navCtrl.push(AgregarPage);
  }

  verDetalle(lista, idx){
    this.navCtrl.push(DetallePage, { lista, idx } );//con el objeto mandamos los parametros

  }

}
