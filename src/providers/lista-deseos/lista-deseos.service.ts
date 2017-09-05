import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Lista } from "../../clases/lista";
/*
Generated class for the ListaDeseosProvider provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular DI.
*/
@Injectable()
export class ListaDeseosProvider {

	listas:Lista[] = [];

	constructor( private http:Http) {
		this.cargarData();
		console.log("se ejecuta el constructor");
	}

	agregarLista( lista:Lista ){
		this.listas.push(lista);
		this.actualizarData();
	}

	eliminarLista (idx:number){
		this.listas.splice(idx, 1);
		this.actualizarData();
	}
	completarItem(lista_index, item_index){
    	this.listas[lista_index].items[item_index].complete = true;
		this.actualizarData();
  	}

	actualizarData(){
		localStorage['listaDeseos'] = JSON.stringify( this.listas );
	}

	cargarData(){
		if (localStorage && localStorage['listaDeseos'])
			this.listas = JSON.parse( localStorage['listaDeseos'] );
	}

}
