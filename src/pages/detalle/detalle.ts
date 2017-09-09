import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lista, Item } from '../../clases/index';
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
		this.lista.complete = this.lista.items.every( ( item ) => item.complete)
		this._listaDeseos.actualizarData();
	};

	mostrarAlerta(title:string, message:string,fnAceptar:any, fnCancelar?:any){
		let confirm = this.alertCtrl.create({
			title: title,
			message: message,
			buttons: [
				{
					text: 'Cancelar',
					handler: () => {
						fnCancelar();
						console.log('Disagree clicked');
					}
				},
				{
					text: 'Borrar',
					handler: () => {
						fnAceptar();
						this.navCtrl.pop();
						console.log('Agree clicked');
					}
				}
			]
		});
		confirm.present();
	};

	borrarLista(){

		this.mostrarAlerta(
			'¿Borramos la lista' + this.lista.name + '?',
			'Una vez aceptada, esta acción no se podrá deshacer',
			//borrar
			this._listaDeseos.eliminarLista.bind(this._listaDeseos, this.idx)
		)
	}
}
