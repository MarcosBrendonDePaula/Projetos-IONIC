import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Regrade3PageRoutingModule } from './regrade3-routing.module';

import { Regrade3Page } from './regrade3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Regrade3PageRoutingModule
  ],
  declarations: [Regrade3Page]
})
export class Regrade3PageModule {}
