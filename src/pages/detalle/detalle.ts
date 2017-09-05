import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lista,Item } from '../../clases/index';
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos.service';
import { AlertController } from 'ionic-angular';
/**
* Generated class for the DetallePage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/

@IonicPage()
@Component({
	selector: 'page-detalle',
	templateUrl: 'detalle.html',
})
export class DetallePage {
	idx:number;
	lista:Lista;

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		private _listaDeseos: ListaDeseosProvider,
		public alertCtrl:AlertController) {

			this.idx = this.navParams.get('idx');
			this.lista = this.navParams.get('lista');
		}

		ionViewDidLoad() {};
		
		actualizar(item:Item){
			item.complete = !item.complete;
			//se chequea si la lista ha sido compeltada, para ellos sus items (todos) han debido completarse
			this.lista.complete = this.lista.items.every( ( item ) => item.complete
			)
			this._listaDeseos.actualizarData();
		}

		borrarLista(){
			let confirm = this.alertCtrl.create({
				title: '¿Seguro que quieres borrar la lista?' + this.lista.name,
				message: 'Una vez aceptada, esta acción no se podrá deshacer',
				buttons: ['Cancelar',
				{
					text: 'Borrar',
					handler: () => {
						console.log('Agree clicked');
						this._listaDeseos.eliminarLista(this.idx);
						this.navCtrl.pop();
					}
				}
			]
		});
		confirm.present();

	}

}
