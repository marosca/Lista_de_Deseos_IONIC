import { Component } from '@angular/core';

import { TerminadasPage } from '../terminadas/terminadas';
import { PendientesPage } from '../pendientes/pendientes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesPage;
  tab2Root = TerminadasPage;

  constructor() {

  }
}
