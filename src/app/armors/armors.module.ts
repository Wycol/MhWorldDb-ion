import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmorsPageRoutingModule } from './armors-routing.module';

import { ArmorsPage } from './armors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmorsPageRoutingModule
  ],
  declarations: [ArmorsPage]
})
export class ArmorsPageModule {}
