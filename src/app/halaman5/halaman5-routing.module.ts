import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Halaman5Page } from './halaman5.page';

const routes: Routes = [
  {
    path: '',
    component: Halaman5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Halaman5PageRoutingModule {}
