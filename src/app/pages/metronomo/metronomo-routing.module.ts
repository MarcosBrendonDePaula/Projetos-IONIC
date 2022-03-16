import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetronomoPage } from './metronomo.page';

const routes: Routes = [
  {
    path: '',
    component: MetronomoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetronomoPageRoutingModule {}
