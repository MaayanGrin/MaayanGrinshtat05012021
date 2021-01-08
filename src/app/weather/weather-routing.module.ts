import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeatherContainerComponent} from './weather-container.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'weather'
  },
  {
    path: 'weather',
    component: WeatherContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule {
}
