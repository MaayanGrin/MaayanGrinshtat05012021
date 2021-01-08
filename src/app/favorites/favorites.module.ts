import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FavoritesContainerComponent} from './favorites-container.component';
import {AppCommonModule} from '../app-common/common.module';
import {FavoritesRoutingModule} from './favorites-routing.module';

@NgModule({
  declarations: [FavoritesContainerComponent],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    AppCommonModule
  ]
})
export class FavoritesModule {
}
