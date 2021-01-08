import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppCommonModule} from '../app-common/common.module';
import {TopNavBarComponent} from './components/top-nav-bar/top-nav-bar.component';

const components = [
  TopNavBarComponent
];
@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    AppCommonModule
  ],
  exports: [components],
})
export class SharedModule {
}
