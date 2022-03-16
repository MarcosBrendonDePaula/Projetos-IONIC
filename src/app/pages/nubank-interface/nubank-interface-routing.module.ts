import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NubankInterfacePage } from './nubank-interface.page';

const routes: Routes = [
  {
    path: '',
    component: NubankInterfacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NubankInterfacePageRoutingModule {}
