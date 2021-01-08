import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ToasterInterceptorService} from './services/toaster-interceptor.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const devProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: ToasterInterceptorService, multi: true},
];

const prodProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: ToasterInterceptorService, multi: true},


];

const providers = environment.production ? prodProviders : devProviders;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers,
  exports: [
    HttpClientModule,
    CommonModule
  ]
})
export class CoreModule {
}
