import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NubankInterfacePageRoutingModule } from './nubank-interface-routing.module';

import { NubankInterfacePage } from './nubank-interface.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NubankInterfacePageRoutingModule
  ],
  declarations: [NubankInterfacePage]
})
export class NubankInterfacePageModule {}
