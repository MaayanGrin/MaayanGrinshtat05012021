import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FavoritesContainerComponent} from './favorites-container.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'favoriteList'
  },
  {
    path: 'favoriteList',
    component: FavoritesContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule {
}
