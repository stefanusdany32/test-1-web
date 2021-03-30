import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Halaman4Page } from './halaman4.page';

const routes: Routes = [
  {
    path: '',
    component: Halaman4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Halaman4PageRoutingModule {}
