import { NgModule } from '@angular/core';
import { TextoPorDefectoPipe } from './../pipes/texto-por-defecto/texto-por-defecto.pipe';
import { PendientesPipe } from './../pipes/pendientes/pendientes.pipe';
@NgModule({
	declarations: [TextoPorDefectoPipe,
    PendientesPipe],
	imports: [],
	exports: [TextoPorDefectoPipe,
    PendientesPipe]
})
export class PipesModule {}
