import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogodavelhaPageRoutingModule } from './jogodavelha-routing.module';

import { JogodavelhaPage } from './jogodavelha.page';

import {BlocoOptVelhaComponent} from '../components/bloco-opt-velha/bloco-opt-velha.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JogodavelhaPageRoutingModule
  ],
  declarations: [JogodavelhaPage, BlocoOptVelhaComponent]
})
export class JogodavelhaPageModule {}
