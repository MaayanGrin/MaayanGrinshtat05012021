import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeatherContainerComponent} from './weather-container.component';
import {AppCommonModule} from '../app-common/common.module';
import {WeatherRoutingModule} from './weather-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [WeatherContainerComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    WeatherRoutingModule,
    SharedModule
  ]
})
export class WeatherModule {
}
