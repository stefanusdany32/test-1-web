import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Halaman4PageRoutingModule } from './halaman4-routing.module';

import { Halaman4Page } from './halaman4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Halaman4PageRoutingModule
  ],
  declarations: [Halaman4Page]
})
export class Halaman4PageModule {}
