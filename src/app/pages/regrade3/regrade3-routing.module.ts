import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Regrade3Page } from './regrade3.page';

const routes: Routes = [
  {
    path: '',
    component: Regrade3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Regrade3PageRoutingModule {}
