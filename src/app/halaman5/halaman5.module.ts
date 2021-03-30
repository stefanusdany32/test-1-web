import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Halaman5PageRoutingModule } from './halaman5-routing.module';

import { Halaman5Page } from './halaman5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Halaman5PageRoutingModule
  ],
  declarations: [Halaman5Page]
})
export class Halaman5PageModule {}
