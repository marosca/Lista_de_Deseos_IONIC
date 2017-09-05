import { Component, OnInit } from '@angular/core';
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos.service';
import { PendientesPage } from '../pendientes/pendientes';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item, Lista } from '../../clases/index';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.html',
})
export class AgregarPage implements OnInit {

    nombreLista:string = ""; //para poder evaluar un lenght
    nombreItem:string = "";

    items:Item[] = []; // guardará los items que se vayan insertando

    constructor( private _listaDeseosService:ListaDeseosProvider,
        private navCtrl: NavController,
        private alertCtrl: AlertController) {  }

        ngOnInit() {}
        showAlert() {
            let alert = this.alertCtrl.create({
                title: 'Nombre de la lista vacio',
                subTitle: 'La lista debe tener un nombre para poder crearla',
                buttons: ['OK']
            });
            alert.present();
        };

        agregarItem(){
            if(this.nombreItem.length > 0){
                this.items.push( new Item(this.nombreItem) );
                this.nombreItem = "";
            }
        };

        deleteItem(i:number){
            if( this.items[i] ){
                this.items.splice(i, 1);
            };
        };

        agregarListainService(){
            if( this.nombreLista.length > 0 ){
                let lista = new Lista( this.nombreLista );
                lista.items = this.items;
                this._listaDeseosService.agregarLista( lista );
                this.nombreLista = "";
                this.navCtrl.pop();
            }else{
                this.showAlert();
            }
        }
    }
