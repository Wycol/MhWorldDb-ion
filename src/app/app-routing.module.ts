import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'monsters',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'monsters',
    loadChildren: () => import('./monsters/monsters.module').then( m => m.MonstersPageModule)
  },
  {
    path: 'weapons',
    loadChildren: () => import('./weapons/weapons.module').then( m => m.WeaponsPageModule)
  },
  {
    path: 'armors',
    loadChildren: () => import('./armors/armors.module').then( m => m.ArmorsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
