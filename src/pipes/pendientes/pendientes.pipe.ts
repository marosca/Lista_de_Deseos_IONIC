import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PendientesPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'pendientes',
  pure: false
})
export class PendientesPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
 transform(listas:any[], terminada:boolean = false):any[] {
    return listas.filter( ( tarea ) =>  tarea.complete === terminada );
  }
}
