import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupComponentPage } from './popup-component.page';

const routes: Routes = [
  {
    path: '',
    component: PopupComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupComponentPageRoutingModule {}
