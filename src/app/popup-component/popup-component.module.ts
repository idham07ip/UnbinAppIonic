import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupComponentPageRoutingModule } from './popup-component-routing.module';

import { PopupComponentPage } from './popup-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupComponentPageRoutingModule
  ],
  declarations: [PopupComponentPage]
})
export class PopupComponentPageModule {}
