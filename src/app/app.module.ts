import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

//pipes
import { TextoPorDefectoPipe } from '../pipes/texto-por-defecto/texto-por-defecto.pipe';
import { PendientesPipe } from '../pipes/pendientes/pendientes.pipe';

//pages (en ionic los componentes son llamados pages... pero es lo mismo)
import { PendientesPage } from '../pages/pendientes/pendientes';
import { TerminadasPage } from '../pages/terminadas/terminadas';
import { TabsPage } from '../pages/tabs/tabs';
import { AgregarPage } from '../pages/agregar/agregar';
import { DetallePage } from '../pages/detalle/detalle';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//servicios (se llama provider porqeu lo he reado con ionic cli)
import { ListaDeseosProvider } from '../providers/lista-deseos/lista-deseos.service';


@NgModule({
  declarations: [
    MyApp,
    PendientesPage,
    TerminadasPage,
    TabsPage,
	  AgregarPage,
    DetallePage,
    TextoPorDefectoPipe,
	PendientesPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendientesPage,TerminadasPage,
    TabsPage,
	  AgregarPage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaDeseosProvider
  ]
})
export class AppModule {}
