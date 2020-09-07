import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmorsPage } from './armors.page';

const routes: Routes = [
  {
    path: '',
    component: ArmorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmorsPageRoutingModule {}
