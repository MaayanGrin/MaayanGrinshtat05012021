import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {WeatherService} from '../../shared/services/weather.service';

@Injectable()
export class FavoritesEffects {
  constructor(private actions$: Actions,
              private weatherApiService: WeatherService
  ) {
  }
}
