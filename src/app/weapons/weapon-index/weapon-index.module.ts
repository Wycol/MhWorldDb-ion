import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeaponIndexPageRoutingModule } from './weapon-index-routing.module';

import { WeaponIndexPage } from './weapon-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeaponIndexPageRoutingModule
  ],
  declarations: [WeaponIndexPage]
})
export class WeaponIndexPageModule {}
