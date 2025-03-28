import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'accueil', loadChildren: () => import('../tabs/accueil/accueil.module').then(m => m.AccueilPageModule) },
      { path: 'produits', loadChildren: () => import('../tabs/produits/produits.module').then(m => m.ProduitsPageModule) },
      { path: 'profil', loadChildren: () => import('../tabs/profil/profil.module').then(m => m.ProfilPageModule), canActivate: [AuthGuard] },
      { path: '', redirectTo: '/tabs/accueil', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
