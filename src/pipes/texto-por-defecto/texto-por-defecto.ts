import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TextoPorDefectoPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'textoPorDefecto',
})
export class TextoPorDefectoPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, defecto:string) {
    return (value) ? value: defecto;
  }
}
