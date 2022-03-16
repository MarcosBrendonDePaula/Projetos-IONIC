import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetronomoPageRoutingModule } from './metronomo-routing.module';

import { MetronomoPage } from './metronomo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetronomoPageRoutingModule
  ],
  declarations: [MetronomoPage]
})
export class MetronomoPageModule {}
