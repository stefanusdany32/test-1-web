import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'halaman4',
    loadChildren: () => import('./halaman4/halaman4.module').then( m => m.Halaman4PageModule)
  },
  {
    path: 'halaman4/:fix',
    loadChildren: () => import('./halaman4/halaman4.module').then( m => m.Halaman4PageModule)
  },
  {
    path: 'halaman5',
    loadChildren: () => import('./halaman5/halaman5.module').then( m => m.Halaman5PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
