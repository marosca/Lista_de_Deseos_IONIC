import { Item } from './item';

export class Lista{
	name:string;
	complete:boolean;
	items:Item[];

	constructor(name:string){
		this.name = name;
		this.complete = false;
	}

	// agregarItem( its:Item[] ){
	// 	console.log("agregado item");
	// 	this.items.push( its );
	// }



}
