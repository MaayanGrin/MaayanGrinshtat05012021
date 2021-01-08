import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutingPath} from './shared/models/routing.models';

const routes: Routes = [
  {path: RoutingPath.DEFAULT, redirectTo: RoutingPath.WEATHER, pathMatch: 'full'},
  {
    path: RoutingPath.WEATHER,
    loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule),
  },
  {
    path: RoutingPath.FAVORITES,
    loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule),
  },
  // otherwise redirect to home
  {path: '*', redirectTo: RoutingPath.WEATHER}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
