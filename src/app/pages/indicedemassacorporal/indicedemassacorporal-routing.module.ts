import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicedemassacorporalPage } from './indicedemassacorporal.page';

const routes: Routes = [
  {
    path: '',
    component: IndicedemassacorporalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicedemassacorporalPageRoutingModule {}
