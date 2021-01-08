import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule.withConfig({useColumnBasisZero: true}),
    RouterModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class AppCommonModule {
}
