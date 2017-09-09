
import { AlertController, NavController, NavParams } from 'ionic-angular';

// export class UtilProvider{
// 	constructor(private alertCtrl:AlertController,
// 				private navCtrl:NavController){}

function mostrarAlerta(title:string, message:string,fnAceptar:any, fnCancelar?:any){
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
					//	this.navCtrl.pop();
						console.log('Agree clicked');
					}
				}
			]
		});
		confirm.present();
	};
