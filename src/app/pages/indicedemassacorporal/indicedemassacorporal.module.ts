import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicedemassacorporalPageRoutingModule } from './indicedemassacorporal-routing.module';

import { IndicedemassacorporalPage } from './indicedemassacorporal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicedemassacorporalPageRoutingModule
  ],
  declarations: [IndicedemassacorporalPage]
})
export class IndicedemassacorporalPageModule {}
