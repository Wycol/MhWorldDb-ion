import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeaponIndexPage } from './weapon-index.page';

const routes: Routes = [
  {
    path: '',
    component: WeaponIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeaponIndexPageRoutingModule {}
