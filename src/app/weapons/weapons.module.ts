import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeaponsPageRoutingModule } from './weapons-routing.module';

import { WeaponsPage } from './weapons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeaponsPageRoutingModule
  ],
  declarations: [WeaponsPage]
})
export class WeaponsPageModule {}
